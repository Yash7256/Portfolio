export interface Certification {
  name: string;
  link: string;
  type: 'global' | 'general' | 'competition';
  issuer?: string;
  date?: string;
}

export const certifications: Certification[] = [
  {
    name: 'DEVOPS Professional',
    link: 'https://drive.google.com/file/u/1/d/1Iosp_R5d2S6nz9zbwl56_10zImDg5pJ3/view?usp=sharing',
    type: 'global',
    issuer: 'Oracly University',
    date: '2025-10-13'
  },
  {
    name: 'DEVELOPER Professional',
    link: 'https://drive.google.com/file/d/1vGjiN0zdAtf5jwaDa4KZb_vHy6QdhHDb/view',
    type: 'global',
    issuer: 'Oracle University',
    date: '2025-09-22'
  },
  {
    name: 'GEN AI Professional',
    link: 'https://drive.google.com/file/d/18E3_0Bd9DHSmM82zEFVjluvYl_UyWt-b/view',
    type: 'global',
    issuer: 'Oracle University',
    date: '2025-08-20'
  }
];