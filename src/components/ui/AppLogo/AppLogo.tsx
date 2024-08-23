import logoImage from '../../../shared/assets/images/logo.png';

export interface AppLogoProps {
  className?: string;
}

export const AppLogo = ({ className }: AppLogoProps) => (
  <img className={className} src={logoImage} alt='logo' />
);
