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
import homeMultiple from './home-multiple.svg?raw';
import checkCircle from './check-circle.svg?raw';
import grid from './grid.svg?raw';
import clipboard from './clipboard.svg?raw';
import dollar from './dollar.svg?raw';
import legal from './legal.svg?raw';
import alert from './alert.svg?raw';
import close from './close.svg?raw';
import heart from './heart.svg?raw';
import clock from './clock.svg?raw';
import shieldAlt from './shield-alt.svg?raw';
import briefcase from './briefcase.svg?raw';
import trendingUp from './trending-up.svg?raw';
import passiveIncome from './passive-income.svg?raw';
import rentability from './rentability.svg?raw';
import integratedManagement from './integrated-management.svg?raw';
import license from './license.svg?raw';
import adOptimization from './ad-optimization.svg?raw';
import multiPlatform from './multi-platform.svg?raw';
import camera from './camera.svg?raw';
import userVerify from './user-verify.svg?raw';
import cleaning from './cleaning.svg?raw';
import maintenance from './maintenance.svg?raw';
import reviews from './reviews.svg?raw';
import key from './key.svg?raw';
import support247 from './support-247.svg?raw';
import bed from './bed.svg?raw';
import amenities from './amenities.svg?raw';
import euro from './euro.svg?raw';
import gavel from './gavel.svg?raw';
import hotel from './hotel.svg?raw';

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
  arrowDown,
  homeMultiple,
  checkCircle,
  grid,
  clipboard,
  dollar,
  legal,
  alert,
  close,
  heart,
  clock,
  shieldAlt,
  briefcase,
  trendingUp,
  passiveIncome,
  rentability,
  integratedManagement,
  license,
  adOptimization,
  multiPlatform,
  camera,
  userVerify,
  cleaning,
  maintenance,
  reviews,
  key,
  support247,
  bed,
  amenities,
  euro,
  gavel,
  hotel
};

// Helper function to get icon by name
export function getIcon(name: keyof typeof iconMap): string {
  return iconMap[name] || '';
}
