import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProfileCard from './ProfileCard.vue';
import { profileData } from './ProfileRepository';

describe('ProfileCard', () => {
  it('renders profile information correctly', () => {
    const wrapper = mount(ProfileCard, {
      props: {
        profile: profileData
      }
    });

    expect(wrapper.text()).toContain(profileData.name);
    expect(wrapper.text()).toContain(profileData.role);
    expect(wrapper.text()).toContain(profileData.email);
  });
});