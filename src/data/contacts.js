export const contact = {
  email: 'jiusocialprojeto25@gmail.com',

  ramon: {
    name: 'Ramon Cleber',
    phone: '(83) 98690-9986',
    phoneInternational: '+5583986909986',
    whatsapp: '5583986909986',
  },

  jerffeson: {
    name: 'Jerffeson',
    phone: '(83) 98134-7497',
    phoneInternational: '+5583981347497',
    whatsapp: '5583981347497',
  },

  instagram: {
    username: '@projetojiujitsu_desterro',
    url: 'https://www.instagram.com/projetojiujitsu_desterro/',
  },

  address: {
    street: 'Rua Aprígio Leite, S/N, Centro',
    city: 'Desterro',
    state: 'PB',
    country: 'Brasil',
    full: 'Rua Aprígio Leite, S/N, Centro — Desterro, PB',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Aprigio+Leite+Desterro+PB',
  },
}

export function createWhatsAppUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}