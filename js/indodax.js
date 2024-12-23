const SALDO_BTC = 3;

let count = 1;
let kurs_btc = 0;
let original_aset = 0;
let aset = 0;
let saldo = 0;

setInterval(() =>{
    
    aset = Number($('.total_assets_val_main_menu').html().replace('.',''));

    if (original_aset < 1) {

        original_aset = aset;

    } else {

        kurs_btc = Number($('.price_btcidr_val').data('sort'));
        
        try{

            saldo = SALDO_BTC + Number($('tr[href$="https://indodax.com/market/BTCIDR"]').children().last().html().replace(' BTC','').replace(',','.'));
       
        } catch(ex) {
            
            saldo = SALDO_BTC;
        }
        
        aset = original_aset + (saldo * kurs_btc);

        $('.total_assets_val_main_menu').html(parseInt(aset).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    }
    
    console.log('Kurso BTC: ' + kurs_btc);
    console.log('Original Saldo BTC: ' + (saldo-SALDO_BTC) );
    console.log('Saldo BTC: ' + saldo);
    console.log('Original Asset: ' + original_aset + ` (${original_aset.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")})`);
    console.log('Aset: ' + aset);
    console.log('---------------------------------');
}, 2555);