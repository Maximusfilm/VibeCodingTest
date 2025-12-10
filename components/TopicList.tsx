'use client';

import { Topic, TagCategory } from '@/types';
import TopicCard from './TopicCard';

interface TopicListProps {
  topics: Topic[];
  selectedTags: TagCategory[];
  onTopicClick: (topic: Topic) => void;
}

export default function TopicList({
  topics,
  selectedTags,
  onTopicClick,
}: TopicListProps) {
  return (
    <div className="space-y-4">
      {topics.map((topic, index) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          rank={index + 1}
          selectedTags={selectedTags}
          onClick={() => onTopicClick(topic)}
        />
      ))}
    </div>
  );
}
