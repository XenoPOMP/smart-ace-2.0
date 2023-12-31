export interface MarqueeProps {
  behavior?: 'scroll' | 'slide' | 'alternate';
  direction?: 'left' | 'right' | 'up' | 'down';
  loop?: boolean;
  scrollSpeed?: number;
  scrollDelay?: number;
  as?: 'div' | 'marquee';
}
