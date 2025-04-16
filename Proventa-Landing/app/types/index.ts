import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Step {
  id: string;
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string; titleId?: string } & React.RefAttributes<SVGSVGElement>>;
  features: string[];
}

export interface AboutCard {
  title: string;
  description: string;
  icon: (props: any) => React.ReactElement;
} 