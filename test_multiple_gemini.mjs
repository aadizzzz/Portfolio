import { GoogleGenAI } from '@google/genai';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

// Read .env.local to get key
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const keyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.+)/);
const apiKey = keyMatch ? keyMatch[1] : '';

const ai = new GoogleGenAI({ apiKey });

async function ask(question) {
    try {
        console.log(`Asking: ${question}`);
        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: question,
            config: {
                temperature: 0.7,
            }
        });
        console.log(`SUCCESS: ${response.text}`);
    } catch (e) {
        console.error(`ERROR on "${question}":`, e.message || String(e));
    }
}

async function run() {
    await ask("Hello");
    await new Promise(r => setTimeout(r, 1000));
    await ask("How are you?");
    await new Promise(r => setTimeout(r, 1000));
    await ask("What is your name?");
}

run();
