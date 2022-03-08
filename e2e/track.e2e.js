import {setDeviceLocation} from './helper';


describe('Tracker', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  beforeAll(async () => {
    await device.launchApp({
      permissions: {notifications: 'YES', location: 'inuse'},
    });
  });
  describe('When HealthPage loads', () => {
    it('should display stepTracker heading', async () => {
      await expect(element(by.id('tracker_heading'))).toHaveText('Daily Step Tracker');
    });
    it('should show weather', async () => {
      await setDeviceLocation(12.9716, 77.5946);
      await expect(element(by.id('pressure_id'))).toHaveText("957");
    });
  });

  describe('When the device shakes', () => {
    it('should increments steps count ', async () => {
      await device.shake();
       await expect(element(by.id('steps_id'))).toHaveText('2');
  });
});
describe('When rewards Button is clicked', () => {
    it('should Navigate to reward screen', async () => {
      await element(by.id('reward_btn')).tap();
      await expect(element(by.id('reward'))).toBeVisible();
     });
    });
});
