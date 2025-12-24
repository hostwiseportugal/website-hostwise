// Icon map for inline SVG usage with ?raw imports
// Usage: import { iconMap } from '@/icons/iconMap';
// Then use in components: <div set:html={iconMap.check} />

import check from './check.svg?raw';
import chevronRight from './chevron-right.svg?raw';
import chevronLeft from './chevron-left.svg?raw';
import chevronDown from './chevron-down.svg?raw';
import calendar from './calendar.svg?raw';
import shield from './shield.svg?raw';
import home from './home.svg?raw';
import building from './building.svg?raw';
import money from './money.svg?raw';
import tools from './tools.svg?raw';
import chartLine from './chart-line.svg?raw';
import chartBar from './chart-bar.svg?raw';
import star from './star.svg?raw';
import info from './info.svg?raw';
import location from './location.svg?raw';
import lock from './lock.svg?raw';
import message from './message.svg?raw';
import spark from './spark.svg?raw';
import arrowRight from './arrow-right.svg?raw';
import arrowDown from './arrow-down.svg?raw';

export const iconMap: Record<string, string> = {
  check,
  chevronRight,
  chevronLeft,
  chevronDown,
  calendar,
  shield,
  home,
  building,
  money,
  tools,
  chartLine,
  chartBar,
  star,
  info,
  location,
  lock,
  message,
  spark,
  arrowRight,
  arrowDown
};

// Helper function to get icon by name
export function getIcon(name: keyof typeof iconMap): string {
  return iconMap[name] || '';
}
