import { useTranslation } from 'react-i18next';

import { type UserDataType } from 'mocks/userData.types';
import { Avatar } from 'shared/ui/components/Avatar/Avatar';
import { SocialLinks } from 'widgets/SocialLinks';

import cls from './UserProfile.module.scss';
import { firstLetters } from '../utils/utils';

export const UserProfile = ({ userData }: { userData: UserDataType }) => {
  const { avatar, socialLinks } = userData;

  const [t] = useTranslation();
  const translatedFullname = t('enums:names.fullname');

  return (
    <div className={cls.userProfileWrapper}>
      <Avatar
        src={avatar || ''}
        initials={firstLetters(translatedFullname).toUpperCase()}
      />

      <div className={cls.userInfoWrapper}>
        <h2 className={cls.userName}>{translatedFullname}</h2>
        
        <div className={cls.socialLinksBox}>
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
};
