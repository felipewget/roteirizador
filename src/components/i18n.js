import en_us from './../i18n/en_us.js';
import fr_fr from './../i18n/fr_fr.js';
import pt_br from './../i18n/pt_br.js';

export function getLanguage(){

    let lang = localStorage.getItem('language');

    switch ( lang ) {
      case 'en-us':
        return en_us;

      case 'fr-fr':
        return fr_fr;

      case 'pt-br':
        return pt_br;

      default:
        return pt_br;

    }

}

export function setLanguage( lang ){

  localStorage.setItem( 'language', lang );

}
