const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Խաղերի գներ
const freeFireDiamonds = [
  { amount: '110💎', price: '450 դրամ' },
  { amount: '341💎', price: '1300 դրամ' },
  { amount: '572💎', price: '2250 դրամ' },
  { amount: '1166💎', price: '4100 դրամ' },
  { amount: '2398💎', price: '8300 դրամ' },
  { amount: '6160💎', price: '21000 դրամ' }
];

const freeFireVouchers = [
  { type: 'Շաբաթական (450💎)', price: '850 դրամ' },
  { type: 'Ամսական (2600💎)', price: '3500 դրամ' }
];

const pubgUC = [
  { amount: '30 UC 💰', price: '250 դրամ' },
  { amount: '60 UC 💰', price: '400 դրամ' },
  { amount: '70 UC 💰', price: '600 դրամ' },
  { amount: '120 UC 💰', price: '750 դրամ' },
  { amount: '150 UC 💰', price: '1000 դրամ' },
  { amount: '180 UC 💰', price: '1100 դրամ' },
  { amount: '325 UC 💰', price: '1800 դրամ' },
  { amount: '350 UC 💰', price: '2100 դրամ' },
  { amount: '400 UC 💰', price: '2500 դրամ' },
  { amount: '500 UC 💰', price: '3000 դրամ' },
  { amount: '650 UC 💰', price: '3700 դրամ' },
  { amount: '660 UC 💰', price: '3500 դրամ' },
  { amount: '700 UC 💰', price: '4000 դրամ' },
  { amount: '800 UC 💰', price: '4600 դրամ' },
  { amount: '1000 UC 💰', price: '6000 դրամ' },
  { amount: '1200 UC 💰', price: '7000 դրամ' },
  { amount: '1250 UC 💰', price: '7200 դրամ' },
  { amount: '1350 UC 💰', price: '7600 դրամ' },
  { amount: '1400 UC 💰', price: '8000 դրամ' },
  { amount: '1500 UC 💰', price: '8300 դրամ' },
  { amount: '1750 UC 💰', price: '9000 դրամ' },
  { amount: '2000 UC 💰', price: '10500 դրամ' },
  { amount: '2500 UC 💰', price: '13000 դրամ' },
  { amount: '3000 UC 💰', price: '16000 դրամ' },
  { amount: '3500 UC 💰', price: '17500 դրամ' },
  { amount: '3850 UC 💰', price: '16000 դրամ' },
  { amount: '4000 UC 💰', price: '18500 դրամ' },
  { amount: '5000 UC 💰', price: '24000 դրամ' },
  { amount: '6000 UC 💰', price: '28500 դրամ' },
  { amount: '8100 UC 💰', price: '32500 դրամ' }
];

const standoffGold = [
  { amount: '100 GOLD☢️', price: '750 դրամ' },
  { amount: '200GOLD☢️', price: '1400 դրամ' },
  { amount: '300 GOLD☢️', price: '2100 դրամ' },
  { amount: '500 GOLD☢️', price: '2900 դրամ' },
  { amount: '1000GOLD☢️', price: '5200 դրամ' },
  { amount: '3000GOLD☢️', price: '12000 դրամ' }
];

const blackRussiaBC = [
  { amount: '100BC◼️', price: '700 դրամ' },
  { amount: '300 BC◼️', price: '1700 դրամ' },
  { amount: '500BC◼️', price: '2750 դրամ' },
  { amount: '700 BC◼️', price: '3800 դրամ' },
  { amount: '1000BC◼️', price: '5400 դրամ' },
  { amount: '1500BC◼️', price: '8000 դրամ' },
  { amount: '2000BC◼️', price: '10700 դրամ' }
];

const grandMobileGC = [
  { amount: '100 GC🪙', price: '600 դրամ' },
  { amount: '300 GC🪙', price: '1700 դրամ' },
  { amount: '500 GC🪙', price: '2700 դրամ' },
  { amount: '700 GC🪙', price: '3650 դրամ' },
  { amount: '1000GC🪙', price: '5250 դրամ' },
  { amount: '1500GC🪙', price: '8200 դրամ' },
  { amount: '2000GC🪙', price: '11100 դրամ' }
];

// Գլխավոր ստեղնաշար
const mainKeyboard = {
  reply_markup: {
    keyboard: [
      ['ԳՆԵԼ ԴՈՆԱՏ', 'ՀԵՏԵՎՈՐԴՆԵՐԻ ԱՎԵԼԱՑՈՒՄ'],
      ['ԿԱՐԾԻՔՆԵՐ', 'ՕԳՆՈՒԹՅՈՒՆ']
    ],
    resize_keyboard: true
  }
};

// Start հրաման
bot.start((ctx) => {
  ctx.reply(
    'Ողջույն! Բարի գալուստ մեր դոնատ բոտ։\n\nԽնդրում ենք ստուգել, որ դուք ռոբոտ չեք։\n\nՄուտքագրեք ձեր անունը և ազգանունը հայերենով, որպեսզի շարունակեք։',
    mainKeyboard
  );
});

// ԳՆԵԼ ԴՈՆԱՏ
bot.hears('ԳՆԵԼ ԴՈՆԱՏ', (ctx) => {
  ctx.reply(
    'Ընտրեք խաղը, որի համար ցանկանում եք գնել դոնատ.',
    {
      reply_markup: {
        keyboard: [
          ['FREE FIRE', 'PUBG'],
          ['STANDOFF', 'BLACK RUSSIA'],
          ['GRAND MOBILE'],
          ['Վերադառնալ գլխավոր մենյու']
        ],
        resize_keyboard: true
      }
    }
  );
});

// Մնացած հրամանները նույն ձևով...

// Ավելացրեք մնացած հրամանները ձեր նախորդ պահանջների համաձայն

// Բոտի աշխատանք
bot.catch((err) => {
  console.log(`Error: ${err}`);
});

bot.launch();

console.log('Բոտը աշխատում է 24/7...');
