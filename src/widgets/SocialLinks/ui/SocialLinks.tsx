import classNames from 'clsx';
import upperFirst from 'lodash/upperFirst';
import { useTranslation } from 'react-i18next';

import { type SocialLinksType } from 'mocks/userData.types';
import { ReactComponent as FileIcon } from 'shared/assets/icons/file-icon.svg';

import cls from './SocialLinks.module.scss';

export const SocialLinks = ({ socialLinks, className = '' }: {
  socialLinks: SocialLinksType;
  className?: string;
}) => {
  const [t] = useTranslation();

  return (
    <nav className={classNames(cls.socialLinksWrapper, {}, [cls[className]])}>
      {(Object.keys(socialLinks) as (keyof SocialLinksType)[]).map((link) => (
        <div
          key={link}
          className={cls.linkWrapper}
        >
          <FileIcon />
          
          <a
            className={cls.socialLinks}
            href={socialLinks[link]}
            target="_blank"
            rel="noreferrer"
          >
            {upperFirst(link === 'resume' ? t('enums:links.resume') : link)}
          </a>
        </div>
      ))}
    </nav>
  );
};
