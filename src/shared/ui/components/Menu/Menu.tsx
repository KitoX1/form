import React from 'react';

import classNames from 'clsx';

import { CloseButton } from 'shared/ui/components/CloseButton/CloseButton';

import cls from './Menu.module.scss';

interface MenuProps {
  onClose: () => void;
  children: React.ReactNode;
  isOpened: boolean;
}

export const Menu = ({ onClose, children, isOpened }: MenuProps) => (
  <div className={classNames(cls.menu, { [cls.menuOpened]: isOpened }, [])}>
    <CloseButton onClose={onClose} />
    <div className={cls.menuWrapper}>{children}</div>
  </div>
);
