import {
  CctvIcon,
  DropletsIcon,
  FenceIcon,
  GlassWaterIcon,
  LightbulbIcon,
  RefrigeratorIcon,
  ShirtIcon,
  SnowflakeIcon,
  SpeakerIcon,
  TvIcon,
  WashingMachineIcon,
  WifiIcon } from
'lucide-react';
import type { Appliance, SolarPackage } from '../types/content';

// Prices change often — set `price` to a display string (e.g. "KSh 000,000") or leave null.
export const solarPackages: SolarPackage[] = [
{
  name: 'Hybrid Solar Solution',
  capacity: '3.2KVA',
  inverter: '3.2KVA hybrid inverter',
  battery: '5.12kWh lithium battery',
  panels: '4 × 625W bifacial solar panels',
  components: ['Hybrid inverter', 'Lithium battery', 'Bifacial solar panels', 'Mounting, cabling & protection'],
  suitableFor: ['Homes', 'Small offices', 'Shops'],
  price: null
},
{
  name: 'Hybrid Solar Solution',
  capacity: '5KVA',
  inverter: '5KVA hybrid inverter',
  battery: '5.12kWh lithium battery',
  panels: '6 × 615W solar panels',
  components: ['Hybrid inverter', 'Lithium battery', 'Solar panels', 'Mounting, cabling & protection'],
  suitableFor: ['Larger homes', 'Offices', 'Small businesses'],
  price: null
}];


export const appliances: Appliance[] = [
{ label: 'TV', icon: TvIcon },
{ label: 'Lighting', icon: LightbulbIcon },
{ label: 'Refrigerator', icon: RefrigeratorIcon },
{ label: 'Wi-Fi Router', icon: WifiIcon },
{ label: 'CCTV', icon: CctvIcon },
{ label: 'Water Pump', icon: DropletsIcon },
{ label: 'Washing Machine', icon: WashingMachineIcon },
{ label: 'Freezer', icon: SnowflakeIcon },
{ label: 'Music System', icon: SpeakerIcon },
{ label: 'Electric Fence', icon: FenceIcon },
{ label: 'Water Dispenser', icon: GlassWaterIcon },
{ label: 'Iron Box', icon: ShirtIcon }];