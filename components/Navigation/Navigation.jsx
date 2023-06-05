import React from 'react';
import DesktopStickyNavigation from './DesktopStickyNavigation';
import NavigationTabs from './NavigationTabs';
import MobileStickyNavigation from './MobileStickyNavigation';
import useSticky from '@/hooks/useSticky';
import useSmallScreen from '@/hooks/useSmallScreen';

const Navigation = () => {
  const { isSticky } = useSticky();
  const { isSmallScreen } = useSmallScreen();


  if (isSticky && isSmallScreen) {
    return <MobileStickyNavigation />;
  } else if (isSmallScreen) {
    return <NavigationTabs />;
  }

  return (
    <>
      <DesktopStickyNavigation />;
    </>
  );
};

export default Navigation;
