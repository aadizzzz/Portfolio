
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  visual?: React.ReactNode;
  tags: string[];
  link: string;
  externalLink?: string;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
