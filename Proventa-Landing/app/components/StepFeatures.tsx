'use client';

export function DataFeature() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-primary-600">Supported Data Sources</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>• Wearable devices (Apple Watch, Fitbit, etc.)</li>
        <li>• Health apps and fitness trackers</li>
        <li>• Manual health records and inputs</li>
        <li>• Environmental data</li>
      </ul>
    </div>
  );
}

export function AIFeature() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-primary-600">AI Capabilities</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>• Pattern recognition in health data</li>
        <li>• Risk prediction and assessment</li>
        <li>• Personalized health insights</li>
        <li>• Continuous learning and adaptation</li>
      </ul>
    </div>
  );
}

export function RecommendFeature() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-primary-600">Personalized Action Plans</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>• Custom nutrition guidance</li>
        <li>• Activity recommendations</li>
        <li>• Stress management techniques</li>
        <li>• Sleep optimization strategies</li>
      </ul>
    </div>
  );
} 