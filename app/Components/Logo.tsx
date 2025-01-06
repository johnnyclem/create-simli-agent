'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import logo from '@/media/SimliLogoV2.svg';
import cn from '@/app/utils/TailwindMergeAndClsx';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SimliHeaderLogo = ({ className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async () => {
    window.open('https://x.com/PrinceMetatron');
  };

  return (
    <div className={cn('fixed top-[32px] left-[32px] cursor-pointer', className)} onClick={handleClick}>
      <h2>$MTRON</h2>
    </div>
  );
};

export default SimliHeaderLogo;
