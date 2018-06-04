// ==UserScript==
// @name         KBMpro Benutzerliste mit IDs
// @namespace    http://www.concept-design.de/
// @version      0.2
// @description  Add user id to KBMpro user list
// @author       Daniel Mann
// @match        https://cundd.kbmpro.de/kbmpro/index.php?action=user
// @grant        none
// ==/UserScript==

(function() {
    jQuery('.tabelle_allg .tr_gerade, .tabelle_allg .tr_ungerade').each(function () {
        jQuery('.spalte-aktionen nobr', jQuery(this)).prepend(
            jQuery('.spalte-aktionen .fa-pencil', jQuery(this)).closest('a').attr('href').split('=').reverse()[0] + "&nbsp;"
        );
    });
})();