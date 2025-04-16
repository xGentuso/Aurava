import { Feature, AboutCard } from '../types';
import { ChartIcon, SecurityIcon, BrainIcon } from '../components/Icons';
import { DataFeature, AIFeature, RecommendFeature } from '../components/StepFeatures';
import { ChartBarIcon, SparklesIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import { EarlyDetectionIcon, MonitoringIcon, AnalysisIcon, PredictiveIcon, InsightsIcon, LearningIcon } from '../components/FeatureIcons';
import React from 'react';

export const features: Feature[] = [
  {
    title: 'Early Detection',
    description: 'Spot potential health risks before they develop into serious concerns',
    icon: EarlyDetectionIcon
  },
  {
    title: '24/7 Monitoring',
    description: 'Continuous health tracking with real-time notifications and instant alerts',
    icon: MonitoringIcon
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms process your health data for personalized insights',
    icon: AnalysisIcon
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast potential health changes based on your historical data and patterns',
    icon: PredictiveIcon
  },
  {
    title: 'Personalized Insights',
    description: 'Tailored recommendations that adapt to your unique lifestyle and wellness goals',
    icon: InsightsIcon
  },
  {
    title: 'Continuous Learning',
    description: 'Our AI system evolves with you, improving predictions and recommendations over time',
    icon: LearningIcon
  }
];

interface StepType {
  id: string;
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string; titleId?: string } & React.RefAttributes<SVGSVGElement>>;
  features: string[];
}

export const steps: StepType[] = [
  {
    id: 'connect',
    name: 'Connect Your Data',
    description: 'Securely integrate your health data from wearables, apps, and manual inputs for a comprehensive view of your health.',
    icon: ChartBarIcon,
    features: [
      'Wearable devices (Apple Watch, Fitbit, etc.)',
      'Health apps and fitness trackers',
      'Manual health records and inputs',
      'Environmental data'
    ]
  },
  {
    id: 'analyze',
    name: 'AI Analysis',
    description: 'Our advanced AI algorithms analyze your data to identify patterns and predict potential health risks before they become issues.',
    icon: SparklesIcon,
    features: [
      'Pattern recognition in health data',
      'Risk prediction and assessment',
      'Personalized health insights',
      'Continuous learning and adaptation'
    ]
  },
  {
    id: 'recommend',
    name: 'Personalized Recommendations',
    description: 'Receive tailored, evidence-based recommendations for lifestyle changes, nutrition, and activities to prevent potential health issues.',
    icon: ArrowTrendingUpIcon,
    features: [
      'Custom nutrition guidance',
      'Activity recommendations',
      'Stress management techniques',
      'Sleep optimization strategies'
    ]
  }
];

export const aboutCards: AboutCard[] = [
  {
    title: 'Data-Driven Approach',
    description: 'We integrate multiple data sources to create a comprehensive view of your health, using advanced analytics to uncover meaningful patterns and predictions.',
    icon: ChartIcon,
  },
  {
    title: 'Privacy & Security',
    description: 'Your health data is protected with state-of-the-art security measures and strict privacy controls, ensuring your information remains confidential and secure.',
    icon: SecurityIcon,
  },
  {
    title: 'Evidence-Based Innovation',
    description: 'Our AI-powered predictions and recommendations are built on rigorous scientific research and continuously validated through real-world outcomes.',
    icon: BrainIcon,
  }
]; 