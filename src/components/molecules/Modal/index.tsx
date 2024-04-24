'use client';
import {useRef, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

import {cn} from '~/lib/utils';

export function Modal({
  children,
  className,
}: {children: React.ReactNode} & PropsWithClassname) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return createPortal(
    <>
      <div
        ref={modalRef}
        className={cn(className, 'relative', isVisible ? 'block' : 'hidden')}
      >
        {children}
      </div>
    </>,
    document.getElementById('modal-root')!,
  );
}
