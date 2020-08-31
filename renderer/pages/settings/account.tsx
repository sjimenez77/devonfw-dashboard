import SpaceAround from '../../modules/shared/hoc/SpaceAround';
import ProfileSetup from '../../modules/intro/components/profile-setup/profile-setup';
import Background from '../../modules/home/components/background/background';

export default function Account(): JSX.Element {
  return (
    <Background>
      <SpaceAround>
          <ProfileSetup settingsPage={true}></ProfileSetup>
      </SpaceAround>
    </Background>
  );
}