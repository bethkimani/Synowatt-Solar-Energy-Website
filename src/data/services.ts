import {
  BatteryChargingIcon,
  BoxesIcon,
  FactoryIcon,
  HouseIcon,
  RulerIcon,
  SunIcon,
  WrenchIcon,
  ZapIcon } from
'lucide-react';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  title: 'Solar System Installation',
  description: 'Professional installation of residential, commercial and institutional solar systems.',
  icon: SunIcon
},
{
  title: 'Hybrid Solar Systems',
  description: 'Solar systems that combine solar energy, battery storage and grid power.',
  icon: ZapIcon
},
{
  title: 'Lithium Battery Storage',
  description: 'Reliable lithium battery solutions for storing solar energy.',
  icon: BatteryChargingIcon
},
{
  title: 'Solar System Design & Consultation',
  description: 'We assess your energy requirements and recommend a suitable solar solution.',
  icon: RulerIcon
},
{
  title: 'Solar Maintenance & Support',
  description: 'System inspection, maintenance, troubleshooting and technical support.',
  icon: WrenchIcon
},
{
  title: 'Commercial & Industrial Solar',
  description: 'Solar solutions designed for businesses and organizations.',
  icon: FactoryIcon
},
{
  title: 'Residential Solar Solutions',
  description: 'Reliable solar systems for homes and residential properties.',
  icon: HouseIcon
},
{
  title: 'Solar Equipment & Components',
  description: 'Quality inverters, batteries, solar panels and accessories.',
  icon: BoxesIcon
}];


export const aboutHighlights: string[] = [
'Solar system design',
'Professional installation',
'Hybrid solar solutions',
'Lithium battery storage',
'Solar maintenance',
'Energy consultation',
'Residential solutions',
'Commercial solutions',
'Institutional solutions'];