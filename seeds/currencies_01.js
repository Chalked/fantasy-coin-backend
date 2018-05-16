
exports.seed = function(knex, Promise) {
  return knex('currencies').del()
    .then(function () {
      return knex('currencies').insert([
        {
          currency_id: 1, 
          collection_id: 1, 
          symbol: 'BTC', 
          name: 'Bitcoin', 
          buy_rate: 0.3421, 
          coin_amount: 0.6453
        },{
          currency_id: 2, 
          collection_id: 2, 
          symbol: 'ETH', 
          name: 'Ethereum', 
          buy_rate: 0.3421, 
          coin_amount: 1.002345
        },{
          currency_id: 3, 
          collection_id: 3, 
          symbol: 'XRP', 
          name: 'Ripple', 
          buy_rate: 0.3421, 
          coin_amount: 7652.4523
        },{
          currency_id: 4, 
          collection_id: 2, 
          symbol: 'XRP', 
          name: 'Ripple', 
          buy_rate: 0.3421, 
          coin_amount: 3241.3422
        },{
          currency_id: 5, 
          collection_id: 3, 
          symbol: 'ETH', 
          name: 'Ethereum', 
          buy_rate: 0.3421, 
          coin_amount: 3.89352
        },{
          currency_id: 6, 
          collection_id: 1, 
          symbol: 'BTC', 
          name: 'Bitcoin', 
          buy_rate: 0.3421, 
          coin_amount: 0.893853
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE currencies_currency_id_seq RESTART WITH 7;');
    });
};
