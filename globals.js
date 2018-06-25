/**
 * @type {Function}
 * 
 * @properties={typeid:35,uuid:"AD32B3FE-4AEA-4856-B170-D33DBF75D7E1",variableType:-4}
 */
var vOperationDoneFunction = null;

/**
 * @type {Function}
 * 
 * @properties={typeid:35,uuid:"280A7A1F-654E-41E4-9FA4-65028A713846",variableType:-4}
 */
var vUpdateOperationStatusFunction = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B64797D3-318C-4FA6-9142-1CF3E9AD7A18",variableType:4}
 */
var vls_anno_filter_min = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EBF39840-22AC-4061-8B4A-82BD90121A40",variableType:4}
 */
var vls_anno_filter_max = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"F51D5EA0-F28A-4FBF-96B4-E9503F3B4495",variableType:8}
 */
var vls_mese_filter_min = 1;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"01774EF8-E0CE-40F6-AACB-384E2989C185",variableType:8}
 */
var vls_mese_filter_max = 12;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E6387081-3E10-4D54-BF41-35302D77784F"}
 */
var URI_FTP_SITO = 'ftp.studiomiazzo.it';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"04A04CE3-AE47-486C-89D2-6102EB2C6469"}
 */
var URI_FTP_MAGNACARTA = 'magnacarta.studiomiazzo.it';

/**
 * @properties={typeid:35,uuid:"F96CEC29-09A9-46FD-8F04-5BD2F7839A92",variableType:-4}
 */
var Security =
{ 
	FTP_SITO: { user: 'servoy', password: 'WETy73rtwqw' },
	FTP_MAGNACARTA: { user: 'admin', password: 'dfsan32' }
};

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"89BB6F2A-32CF-4EBB-B2BA-38AE4FE5BBF7",variableType:4}
 */
var vCurrentEmployerID = 0;

/**
 * Represents false as the number 0
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D5CB605A-5899-4771-AF6D-36F18ED225F9",variableType:4}
 */
var FALSE = 0;

/**
 * Represents true as the number 1
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C20E6730-0533-4F9D-A2C2-7116D42427C0",variableType:4}
 */
var TRUE = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48A1E828-8A44-40F0-885A-9766400A9F03",variableType:4}
 */
var _tipologiaDitta = 0;

/**
 * @properties={typeid:35,uuid:"CB3DAFA5-EBD2-4DFA-A484-D2E559088B4F",variableType:-4}
 */
var customer_dbserver_name = null;

/**
 * @properties={typeid:35,uuid:"5C7DC9D3-2389-4BB7-89BF-02AF79CE497F",variableType:-4}
 */
var Connessione = { SEDE: 0, CLIENTE: 1 };

/**
 * @properties={typeid:35,uuid:"3AD9AC21-B55C-49C8-8D84-E0A2F0D9A3EB",variableType:-4}
 */
var Tipologia = { STANDARD: 0, ESTERNA : 1, GESTITA_UTENTE : 2, FORNITORE : 3, CLIENTE : 4 };

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07E9120A-AC3E-474B-9B19-3C9B9FEDE8F2"}
 */
var DEMO_GROUP = 'Gruppo demo';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C74D9C7B-DE44-4B49-B0EA-935AB8C8DDFE"}
 */
var DEMO_USER = 'Demo';

/**
 * @properties={typeid:35,uuid:"763B04C1-EB2A-4C99-93D2-44ADA627C87D",variableType:-4}
 */
var HTTPStatusCode = 
{
	OK					: 200, 
	BAD_REQUEST			: 400, 
	UNAUTHORIZED		: 401,
	FORBIDDEN			: 403, 
	NOT_FOUND			: 404,
	REQUEST_TIMEOUT		: 408,
	CONFLICT			: 409,
	INTERNAL_ERROR		: 500,
	NOT_IMPLEMENTED		: 503
};

/**
 * @properties={typeid:35,uuid:"5AD052DC-1FD2-4DE2-A402-1985655F0164",variableType:-4}
 */
var Server = 
{
	CLIENTE_DEMO	: 'cliente_demo',
	MA_ANAGRAFICHE	: 'ma_anagrafiche',
	MA_ANAGRAFICHE_GENERALE : 'ma_anagrafiche_generale',
	MA_COMMON		: 'ma_common',
	MA_NEWS         : 'ma_news',
	MA_COMUNICAZIONI: 'ma_comunicazioni',
	MA_FRAMEWORK	: 'ma_framework',
	MA_HR			: 'ma_hr',
	MA_LOG			: 'ma_log',
	MA_PRATICHE		: 'ma_pratiche',
	MA_PRESENZE		: 'ma_presenze',
	MA_RICHIESTE    : 'ma_richieste',
	MA_SCADENZIARI	: 'ma_scadenziari',
	MA_NL           : 'ma_nl',
	SVY_FRAMEWORK	: 'svy_framework'
};

/**
 * @properties={typeid:35,uuid:"007F2FC7-CB7B-42D6-8797-1E0DAF680495",variableType:-4}
 */
var Module =
{
	AUTORIZZAZIONI: 'AUT',
	ANAGRAFICHE: 'AG',
 	RILEVAZIONE_PRESENZE : 'RP',
	FERIE_PERMESSI : 'RFP',
	PANNELLOVARIAZIONI: 'PV',
	HR: 'HR',
	COMUNICAZIONI: 'COM',
	COMMESSE : 'COMM',
	SCADENZIARIO: 'SW',
	UTILITY: 'UTL'	
}

/**
 * @properties={typeid:35,uuid:"4B5ED4BF-4695-4F4C-BC66-03062ED2CCAB",variableType:-4}
 */
var ModuleSoftware = 
{
	PRESENZA_SEMPLICE : 'PS',
	PRESENZA_SEMPLICE_LITE : 'PSL',
	EPI2_ESTERNO_NO_JOB : 'EPI2E'
}

/**
 * @properties={typeid:35,uuid:"C12D7ABF-00C5-4BFB-BA84-62E03EEBDBDA",variableType:-4}
 */
var Key = 
{
	ADMIN                    : 'Admin',
	ADMIN_EW                 : 'Admin EW',
	ADMIN_HR                 : 'Admin HR',
	ADMIN_PSL				 : 'Admin PSL',
	ADMIN_NEG                : 'Admin NEG',
	GEST_ANAG_DITTA          : 'Gestione anagrafiche ditta',
	GEST_ANAG_LAV            : 'Gestione anagrafiche lavoratori',
	// gestione chiavi RP
	DITTA                    : 'Ditta',
	LAVORATORI               : 'Lavoratori',
	DITTA_EW                 : 'Ditta EW',
	LAVORATORI_EW            : 'Lavoratori EW',
	REPORT_EW                : 'Report EW',
	DITTA_PSL                : 'Ditta PSL',
	LAVORATORI_PSL           : 'Lavoratori PSL',
	REPORT_PSL               : 'Report PSL',
	ESTERNI                  : 'Esterni',
	ORARIO_LAVORO            : 'Orario di lavoro',
	RILEVAZIONE_PRESENZE     : 'Rilevazione presenze',
	RILEVAZIONE_PRESENZE_COMMESSE: 'Rilevazione presenze commesse',
	TIMBR_DIPENDENTE         : 'Timbrature dipendente',
	TIMBR_DIPENDENTE_WEB     : 'Timbrature dipendente web',
	CARTOLINA_DIPENDENTE     : 'Cartolina dipendente',
	TIMBR_DIPENDENTE_ELIMINA : 'Timbrature dipendente elimina',
	GESTIONE_ANOMALIE        : 'Gestione anomalie',
	GESTIONE_SQUADRATURE     : 'Gestione squadrature',
	DEMO                     : 'DEMO',
	PROG_TURNI               : 'Programmazione turni',
	// gestione chiavi RFP
	RICHIESTA_PERMESSI       : 'RFP',
	RICHIESTA_PERMESSI_CR    : 'RFP Capo Reparto',
	RICHIESTA_PERMESSI_DIP   : 'RFP Dipendente',
	RICHIESTA_PERMESSI_NO_APPROVAZIONE : 'RFP Disabilita approvazione',
	RICHIESTA_PERMESSI_AUTO_APPROVAZIONE : 'RFP Auto approvazione',
	RICHIESTA_PERMESSI_TUTTI_LIV: 'RFP Autorizza tutti i livelli',
	RICHIESTA_PERMESSI_4_LIV : 'RFP Autorizza 4 livelli',
	RICHIESTA_PERMESSI_3_LIV : 'RFP Autorizza 3 livelli',
	RICHIESTA_PERMESSI_2_LIV : 'RFP Autorizza 2 livelli',
	STORICO_OPERAZIONI       : 'Storico operazioni',
	// gestione chiavi HR
	DITTA_HR                 : 'Ditta HR',
	LAVORATORI_HR            : 'Lavoratori HR',
	REPORT_HR                : 'Report HR',
	DETTAGLIO_RETRIBUTIVO    : 'Dettaglio retributivo',
	// gestione chiavi PV
	PANNELLO_VARIAZIONI      : 'Pannello variazioni', 
	PANNELLO_VARIAZIONI_UTENTE: 'Pannello variazioni utente',
	// gestione chiavi UTL
	LOOKUP                   : 'Lookup',
	REQUIRED_FIELDS          : 'Required fields',
	NON_INVIARE_MAIL         : 'Non inviare mail',
	NETTO_LORDO              : 'NL',
	// gestione chiavi AD
	MAGNACARTA               : 'Magnacarta',
	SCADENZIARIO             : 'Scadenziario',
	// gestione chiavi CIR
	CIRCOLARI                : 'Circolari',
	CIRCOLARI_ADMIN          : 'Admin Circolari',
	// gestione chiavi AUT
	AUTORIZZAZIONI           : 'Autorizzazioni',
	AUT_GESTORE              : 'Autorizzazioni gestore',   //anche in presenza di aut_gerarchia, al gestore non vengono applicati i filtri di mappatura 
	AUT_GERARCHIA            : 'Autorizzazioni gerarchia', //con modulo autorizzazioni e mappatura completa utenti
	AUT_GRUPPI               : 'Autorizzazione gruppi',    //con modulo autorizzazioni e mappatura per reparti (solo capireparto ad esempio)
    AUT_VC_LIVELLO_GERARCHICO: 'Autorizzazioni visualizza copertura livello foglia',
	AUT_VC_TUTTI             : 'Autorizzazioni visualizza copertura tutti',
	ENGLISH_LAN              : 'English language',
	// gestione chiavi NEG
	NEGOZIO                  : 'Programmazione negozio',
	// gestione chiavi COMM
	COMMESSE_UTENTE          : 'Programmazione commesse utente',
	COMMESSE_GESTORE         : 'Programmazione commesse gestore',
	COMMESSE_COMPILA_GIORNALIERA : 'Programmazione commesse compila giornaliera',
	COMMESSE_AUTORIZZA       : 'Programmazione commesse autorizza',
	COMMESSE_FATTURA         : 'Programmazione commesse fattura',
	// gestione chiavi RETE
	RETE_IMPRESA             : 'Rete impresa',
	RETE_IMPRESA_GESTORE     : 'Rete impresa gestore'
}

/**
 * @properties={typeid:35,uuid:"BC2D069E-47AD-400A-AA23-B216929503B3",variableType:-4}
 */
var KeyGroup = 
{
	STANDARD                        : 'Standard',
	ANAGRAFICHE                     : 'Anagrafiche',
	PRESENZA_SEMPLICE               : 'PresenzaSemplice',
	PRESENZA_SEMPLICE_GESTIONE      : 'PresenzaSempliceGestione',
	PRESENZA_SEMPLICE_ESTERNI       : 'Esterni',
	PRESENZA_SEMPLICE_GESTIONE_ANOMALIE : 'GestioneAnomalie',
	PRESENZA_SEMPLICE_ORARIO_DI_LAVORO                : 'OrarioDiLavoro',
	HR                              : 'HR',
	HR_GESTIONE                     : 'HRGestione',
	RP                              : 'RP',
	RP_GESTIONE                     : 'RPGestione',
	PANNELLO_VARIAZIONI             : 'PannelloVariazioni',
	PANNELLO_VARIAZIONI_GESTIONE    : 'PannelloVariazioniGestione',
	MAGNACARTA                      : 'Magnacarta',
	CIRCOLARI                       : 'Circolari',
	CIRCOLARI_GESTIONE              : 'CircolariGestione',
	SCADENZIARIO                    : 'Scadenziario',
	AUTORIZZAZIONI                  : 'Autorizzazioni',
	VERSIONI_DEMO                   : 'VersioniDemo'
}

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"AC60B257-9828-4ECC-8501-34A95600EB51",variableType:-4}
 */
var STANDARD_GROUP = ['Lookup','Required fields','Storico operazioni']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"466609E4-1315-4CAE-A126-2A76D2D10AED",variableType:-4}
 */
var ANAGRAFICHE_GROUP = ['Ditta','Lavoratori']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"CF6E552C-BD99-4A47-B4AE-23B33C543D7E",variableType:-4}
 */
var PRESENZA_SEMPLICE_GROUP = ['Cliente','Ditta EW','Lavoratori EW','Report EW','Rilevazione presenze','Stampe Cliente']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"F863DC96-9B3B-486E-9DC8-8888051BD858",variableType:-4}
 */
var PRESENZA_SEMPLICE_GESTIONE_GROUP = ['']

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"F39D670E-FAA1-4378-B807-F0C8432B03C8",variableType:-4}
 */
var PRESENZA_SEMPLICE_GESTIONE_ANOMALIE_GROUP = ['']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"DA143585-2333-4779-BFB2-75A21BAF58C5",variableType:-4}
 */
var PRESENZA_SEMPLICE_ORARIO_DI_LAVORO_GROUP = ['']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"FDC74CD2-090D-4AAE-87C4-290161D37295",variableType:-4}
 */
var PRESENZA_SEMPLICE_ESTERNI = ['Esterni']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"07687A38-96B4-487C-9B29-1167229B0F11",variableType:-4}
 */
var ORARIO_DI_LAVORO_GROUP = ['']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"E0D8CF36-D0FE-47B2-B3B2-2909BE12A8CD",variableType:-4}
 */
var HR_GROUP = ['Ditta HR','Lavoratori HR','Report HR']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"AB401639-8C04-436E-B68D-CC4FDAC28687",variableType:-4}
 */
var HR_GESTIONE_GROUP = ['Dettaglio retributivo']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"99064B1C-E829-48E5-BC1C-643433C29099",variableType:-4}
 */
var RP_GROUP = ['RP','RP Dipendente']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"8D0D0857-E3D8-4D04-BD50-05C0E5C2ADB7",variableType:-4}
 */
var RP_GESTIONE_GROUP = ['RP','RP Capo Reparto']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"97045F90-4CA3-4E15-9D4B-1703ACE0DBB3",variableType:-4}
 */
var PANNELLO_VARIAZIONI_GROUP = ['Pannello variazioni']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A779113D-2F5B-4D38-91E9-FB46EAF2E7ED",variableType:-4}
 */
var PANNELLO_VARIAZIONI_GESTIONE_GROUP = ['']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"B63D56E7-25CC-4D02-93B2-7805967BE3A7",variableType:-4}
 */
var MAGNACARTA_GROUP = ['Magnacarta']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"40E29A87-D852-4831-ADC1-385B59F76312",variableType:-4}
 */
var CIRCOLARI_GROUP = ['Circolari']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"41A0C822-E90E-4FC3-AABF-3F85BC493BEE",variableType:-4}
 */
var SCADENZIARIO_GROUP = ['Scadenziario']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"0F85561B-0490-469F-BF52-97620E3EAD4A",variableType:-4}
 */
var AUTORIZZAZIONI = ['Autorizzazioni']
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"9B9B37EC-6E1D-41F9-94EF-B1AEC989A4A6",variableType:-4}
 */
var DEMO = ['Anagrafiche VERSIONE DEMO','Pannello variazioni VERSIONE DEMO','Presenza semplice VERSIONE DEMO',
            'Scadenziario VERSIONE DEMO']
/**
 * @properties={typeid:35,uuid:"A1B9ECA5-B27F-4BD1-9F9E-7BF748A1F1B3",variableType:-4}
 */
var LinkedServer =
{
	SRV_SEDE		: 'SRV-DB01'
}

/**
 * @properties={typeid:35,uuid:"57EFDBB6-351D-4E07-8689-10D7B0F3D465",variableType:-4}
 */
var Program =
{
	GIORNALIERA             : 'LEAF_Giornaliera',
	CARTOLINA_DIPENDENTE    : 'LEAF_CartolinaDipendente',
	ANOMALIE_TIMBRATURE     : 'TimbratureMancantiDitta',
	SQUADRATURE_GIORNALIERA : 'SquadratureGiornaliera',
	PROGRAMMAZIONE_TURNI    : 'ProgrammazioneTurni'
}

/**
 * @properties={typeid:35,uuid:"82BFC28B-509F-4AD1-BA4D-D0BBFA3E8F67",variableType:-4}
 */
var Table =
{
	GRUPPI                          : 'gruppi',
	GRUPPI_DITTE                    : 'gruppi_ditte',
	GRUPPI_CLASSIFICAZIONI          : 'gruppi_classificazioni',
	GRUPPI_CLASSIFICAZIONI_DETTAGLIO: 'gruppi_classificazionidettaglio',
	DITTE							: 'ditte',
	DITTE_STORICO					: 'ditte_storico',
	DITTE_PRESENZE                  : 'ditte_presenze',
	DITTE_PRESENZE_GRUPPI           : 'ditte_presenzegruppigestione',
	DITTE_GIUSTIFICATIVI_PARAMETRI  : 'ditte_giustificativiparametri',
	DITTE_SERVIZI                   : 'ditte_servizi',
	DITTE_SEDI                      : 'ditte_sedi',
	DITTE_INPS                      : 'ditte_inps',
	DITTE_INAIL                     : 'ditte_inailgenerale',
	DITTE_INAIL_POSIZIONI           : 'ditte_inailposizioni',
	DITTE_INAIL_SEDI                : 'ditte_inailsedi',
	DITTE_INAIL_VOCI_TARIFFA        : 'ditte_inailvocitariffa',
	DITTE_INDIRIZZI                 : 'ditte_indirizzi',
	DITTE_CONTRATTI                 : 'ditte_contratti',
	DITTE_MENSE                     : 'ditte_mense',
	DITTE_LEGAMI                    : 'ditte_legami',
	DITTE_RATEI                     : 'ditte_ratei',
	DITTE_CLASSIFICAZIONI           : 'ditte_classificazioni',
	DITTE_CLASSIFICAZIONI_DETTAGLIO : 'ditte_classificazionidettaglio',
	STORICO							: 'storico_certificati',
	STORICO_CERTIFICATI_DETTAGLIO   : 'storico_certificatidettaglio',
	STORICO_TIPICERTIFICATO			: 'storico_tipicertificato',
	STORICO_LEGAMI_TELEMATICI       : 'storico_certificati_legamitelematici',
	STORICO_DATI_AGGIUNTIVI         : 'storico_datiaggiuntivi',
	OPERATION_LOG					: 'operationlog',
	OPERATION_TYPE					: 'operationtype',
	OPERATION_USER					: 'operationuser',
	OPERATION_STATUS				: 'operationstatus',
	FILE_LOG						: 'filelog',
	LAVORATORI						: 'lavoratori',
	LAVORATORI_DATIANAGRAFICI		: 'lavoratori_datianagrafici',
	LAVORATORI_CLASSIFICAZIONI      : 'lavoratori_classificazioni',
	LAVORATORI_JOB					: 'lavoratori_job',
	PERSONE                         : 'persone',
	PERSONE_DOMICILI                : 'persone_domicili',
	PERSONE_RECAPITI                : 'persone_recapiti',
	PERSONE_ESTERNE                 : 'lavoratori_personeesterne',
	CATEGORIE_RICHIESTE				: 'tab_richieste',
	DITTE_RICHIESTE					: 'ditte_richieste',
	SEDI_INSTALLAZIONE              : 'e2sediinstallazione',
	LAVORATORI_RICHIESTE			: 'lavoratori_richieste',
	LAVORATORI_CAMPI				: 'lavoratori_richiestecampi',
	LAVORATORI_CAMPI_DETTAGLIO      : 'lavoratori_richiestecampi_dettaglio',
	LAVORATORI_VOCITARIFFA          : 'lavoratori_vocitariffa',
	LAVORATORI_DECORRENZE           : 'e2dcg_decorrenza',
	DETTAGLIO_RICHIESTE				: 'tab_richiestedettaglio',
	CAMPI_RICHIESTE					: 'tab_richiestedettagliocampi',
	QUERY_CAMPI_RICHIESTE			: 'tab_richiestedettagliocampi_query',
	VALORI_CAMPI_RICHIESTE			: 'tab_richiestedettagliocampi_valoriadipendente',
	REGOLE_RICHIESTE				: 'tab_richiestedettagliocondizioni',
	DITTE_GESTIONERICHIESTE			: 'ditte_gestionerichieste',
	DITTE_COMMESSE					: 'ditte_commesse',
	DITTE_COMMESSE_FASI             : 'ditte_commesse_fasi',
	DITTE_COMMESSE_FASI_PARAMETRI   : 'ditte_commesse_fasi_parametri', //non utilizzato
	DITTE_COMMESSE_FASI_EVENTI      : 'ditte_commesse_fasi_eventi',
	DITTE_RAGGRUPPAMENTI_FASCE      : 'ditte_raggruppamentifasce',
	LAVORATORI_COMMESSE             : 'lavoratori_commesse',
	SCADENZIARI_REPORT				: 'scadenziari_report',
	EVENTI                          : 'e2eventi',
	EVENTI_CLASSI                   : 'e2eventiclassi',
	EVENTI_CLASSI_PROPRIETA         : 'e2eventiclassiproprieta',
	EVENTI_ABILITAZIONI             : 'e2eventiabilitazioni',
	DETTAGLIO_TITOLOSTUDIO			: 'tab_titolistudio',
	GIORNALIERA                     : 'e2giornaliera',
	GIORNALIERA_EVENTI              : 'e2giornalieraeventi',
	GIORNALIERA_PROGFASCE           : 'e2giornalieraprogfasce',
	TIMBRATURE                      : 'e2timbratura',
	TIMBRATURE_SERVIZIO             : 'e2timbratureservizio',
	TIMBRATURE_SERVIZIOGESTIONE     : 'e2timbratureserviziogestione',
	TIMBRATURE_DIPENDENTI           : 'e2timbraturedipendenti',
	ATTIVITA_DITTA                  : 'e2wk_attivitaeseguiteditta',
	ATTIVITA_DIP                    : 'e2wk_attivitaeseguitedip',
	FASCE_ORARIE                    : 'e2fo_fasceorarie',
	FASCE_ORARIE_FITTIZIE           : 'e2fo_fasceorariefittizie',
	FASCE_ORARIE_RAGGRUPPAMENTI     : 'e2fo_fasceraggruppamenti',
	FASCE_ORARIE_DITTA_TIMBRATURE   : 'ditte_fasceorarietimbrature',
	REGOLE                          : 'e2regole',
	REGOLE_FASCE                    : 'e2regolefasce',
	REGOLE_FASCE_AMMESSE            : 'e2regolefasceammesse',
	RP_TESTA                        : 'lavoratori_giustificativitesta',
	RP_RIGHE                        : 'lavoratori_giustificativirighe',
	PERCORSI                        : 'e2percorsi',
	TRACCIATI_SCARICO               : 'e2progscaricoorologi',
	COMMESSE_ORE                    : 'commesse_giornaliera_ore',
	COMMESSE_TIMBRATURE             : 'commesse_giornaliera_timbrature',
	COMMESSE_GIORNALIERA            : 'commesse_giornaliera',
	TAB_GIUSTIFICATIVI_PARAMETRI    : 'tab_giustificativiparametri',
	TAB_GIUSTIFICATIVI_VALORI       : 'tab_giustificativiparametrivalori',
	TAB_SW                          : 'tab_sw',
	TAB_SWCATEGORIE                 : 'tab_swcategorie',
	TAB_ATTIVITA                    : 'e2wk_tabattivita',
	SYSTEM_NEWS                     : 'system_news',
	SYSTEM_NEWS_SERVICES            : 'system_news_services',
	UTENTI_NEWS_READ                : 'utenti_newsread'
		
}

/**
 * @properties={typeid:35,uuid:"9E5A7F7D-AA9E-4B41-9141-DF44752A59A9",variableType:-4}
 */
var Table_Svy = 
{
	MESSAGES                        : 'sec_user_messages',
	CHATS                           : 'sec_user_chats'
}

/**
 * @properties={typeid:35,uuid:"D79FCDAA-D580-4BBF-99A6-DC4EEDD50886",variableType:-4}
 */
var CategoriaSW =
{
	// codice categoria sw --> idTabCategoriaSW
	RP   : 1,
	AD   : 3,
	GECO : 4,
	HR   : 5,
	RFP  : 7,
	PV   : 8,
	CT   : 9
}

/**
 * @properties={typeid:35,uuid:"360F5044-6F12-4B03-821F-EEB1F984282C",variableType:-4}
 */
var GruppoContrattuale =
{
	SOCI            : 63,
	COLLABORATORI   : 99,
	ALTRO           : -1
}

/**
 * @properties={typeid:35,uuid:"B0A82D8A-C384-45D2-82A7-C9172F97C813",variableType:-4}
 */
var Colors =
{
	SEL_ATTIVO_BG     : '#FF7979',
	SEL_ATTIVO_FG     : '#990000',
	SEL_NON_ATTIVO_BG : '#FF9B9B',
    SEL_NON_ATTIVO_FG : '#CC0000',
	SELECTED		: { background: '#ec1c24', foreground: '#ffffff' },
	DISABLED		: { background: '#434343', foreground: '#aaaaaa' },
	ACTIVE			: { background: '#ec1c24', foreground: '#ffffff' },
	UNACTIVE		: { background: '#434343', foreground: '#ffffff' },
	WARNING			: { background: '#ffee00', foreground: '#434343' },
	NOT_CONFIRMED	: { background: '#777777', foreground: '#ffffff' },
	SATURDAY		: { background: '#DADADA', foreground: '#434343' },
	SUNDAY			: { background: '#BABDB9', foreground: '#434343' },
	EVEN			: { background: '#E8E8E8', foreground: '#434343' },
	ODD				: { background: '#FFFFFF', foreground: '#434343' },
	HOLYDAYS		: { background: '#AAAAAA', foreground: '#FFFFFF' },
	PUBLIC_HOLYDAYS : { background: '#FFFF99', foreground: '#434343' },
	CONSOLIDATED    : { background: '#abcdef', foreground: '#FFFFFF' },
	ATTENDANT       : { background: '#31AD12', foreground: '#434343' },
	REST            : { background: '#AAAAAA', foreground: '#434343' },
	ON_HOLIDAYS     : { background: '#abcdef', foreground: '#434343' },
	OVERTIME        : { background: '#FFA500', foreground: '#434343' }
}

/**
 * @properties={typeid:35,uuid:"0E74F08E-517D-4D20-8055-8E9B568BBC88",variableType:-4}
 */
var TipiIndirizzoDitta =
{
	SEDE_LEGALE : 'SL',
	UNITA_OPERATIVA : 'UO',
	ALTRO_INDIRIZZO : 'AI',
	DOMICILIO_FISCALE : 'DF'
}

/**
 * @properties={typeid:35,uuid:"11162F2F-AB12-44BB-A11D-26553D405E09",variableType:-4}
 */
var TipiIndirizzoPersona =
{
	RESIDENZA : 'R',
	ALTRO_INDIRIZZO : 'AI',
	DOMICILIO_FISCALE : 'DF'
}

/**
 * @properties={typeid:35,uuid:"0C6E7384-7771-4789-AEB1-F9EFC8C5E078",variableType:-4}
 */
var TipiSedeLavoro = 
{
	SEDE_LEGALE : 'SL',
	SEDE_OPERATIVA : 'SO',
	DOMICILIO_FISCALE : 'DF'
}

/**
 * @properties={typeid:35,uuid:"5770203E-B98E-41DB-970C-748863D9B2FA",variableType:-4}
 */
var TipiTimbratura =
{
	MANUALE      : 'mn',
	CAUSALIZZATA : 'cz',
	WEB          : 'wb'
}

/**
 * @properties={typeid:35,uuid:"E7ED6DF5-1DE8-4B47-9E18-47130B09D82D",variableType:-4}
 */
var Operations =
{
	RICEVI_TABELLE_GENERALI : 'RTG',
	RICEVI_TABELLE_DITTA    : 'RTD',
	COMPILA_GIORNI          : 'CG',
	CONTEGGIA_TIMBRATURE    : 'CT',
	CONTROLLI_PRELIMINARI   : 'CP',
	ATTIVA_MESE             : 'AM',
	CHIUSURA_MESE           : 'CM',
	CONFERMA_CERTIFICATI    : 'CC',
	IMPORTA_TRACCIATO       : 'IT',
	SALVA_EVENTO_MULTIPLO   : 'SE',
	CAMBIA_EVENTO           : 'ME',
	ELIMINA_EVENTO_MULTIPLO : 'EE',
	STAMPA_GIORNALIERA      : 'SG',
	STAMPA_SITUAZIONE_DITTA : 'SSD',
	STAMPA_ANNOTAZIONI      : 'SAD',
	STAMPA_SITUAZIONE_EVENTI_LUNGHI : 'SSEL',
	STAMPA_STATISTICA_EVENTI : 'SSE',
	STAMPA_DETTAGLIO_RETRIBUTIVO : 'SDR',
	STAMPA_DATI_ANAGRAFICI : 'SDA',
	STAMPA_DATI_SICUREZZA : 'SDS',
	STAMPA_DATI_PRIVACY     : 'SDP',
	ESPORTA_DETTAGLIO_RETRIBUTIVO : 'EDR',
	ESPORTA_DATI_ANAGRAFICI : 'EDA',
	STAMPA_CARTOLINA_PRESENZE : 'SCP',
	STAMPA_PRESENTI_ASSENTI : 'SPA',
	SCARICA_TIMBRATURE : 'ST',
	INVIA_GIORNALIERA : 'IG',
	STAMPA_SITUAZIONE_RATEI : 'SSR',
	ELENCO_ANAGRAFICHE : 'EWEA',
	AGGIUNGI_NUOVA_DITTA : 'AND',
	STAMPA_STATISTICA_ORE : 'SSO',
	STAMPA_STATISTICA_STRAORDINARIO : 'SSS',
	STAMPA_ANOMALIE_TIMBRATURE : 'SAT',
	STAMPA_RIEPILOGO_VARIAZIONI : 'SRV',
	CAMBIA_EVENTO_GIORNALIERA : 'CE',
	STAMPA_TIMBRATURE_CAUSALIZZATE : 'STCau',
	STAMPA_RIEPILOGO_CAUSALIZZATE : 'SRCau',
	STAMPA_RIEPILOGO_RICHIESTE : 'SRR',
	IMPORTA_TRACCIATO_ORE_COMMESSE : 'ITCom',
	COMPILA_GIORNI_ORE_COMMESSE : 'CGC',
	TRACCIATO_MENSA_RAPPORTO : 'MRTW',
	TRACCIATO_MENSA_GENERE : 'MGTW'
	
}

/**
 * @properties={typeid:35,uuid:"CFB7F2C2-F2FA-41DE-A386-DD0C1ACDD34E",variableType:-4}
 */
var ENVIRONMENT_CASE = null;

/**
 * @properties={typeid:35,uuid:"90C28E33-9B0C-401E-86AE-11B1C5DEF0D2",variableType:-4}
 */
var ENVIRONMENT = {'PRODUCTION' : 0, 'TEST' : 1, 'DEBUG' : 2, 'DEBUG_DIRECT' : 3, 'DEBUG_VB6' : 4 , 'DEVELOPING' : 5};

/**
 * @properties={typeid:35,uuid:"BE8D8DB9-3CF1-4F53-9AD9-61B81464E360",variableType:-4}
 */
var WS_DOTNET_CASE = null;

/**
 * @properties={typeid:35,uuid:"838106B7-A4AB-4832-BD62-5D3843E90140",variableType:-4}
 */
var WS_DOTNET = {'v4' : 0 , 'CORE' : 1 }; 


///**
// * @properties={typeid:35,uuid:"1ED53FFE-8822-410F-94F8-9483F14BB418",variableType:-4}
// */
//var TipiGiustificativiParametri =
//{
//	LTR : 'LTR', // limite temporale richiesta
//	MIO : 'MIO', // modalità inserimento orario
//	NOE : 'NOE'  // intestazione mail
//}
//
///**
// * @properties={typeid:35,uuid:"C1862CC0-DBDE-49AC-841C-1261B5ED8444",variableType:-4}
// */
//var TipiGiustificativiParametriLTRValori = 
//{
//	DSGR  : 'DSGR',  // data successiva al giorno della richiesta
//	DUSGR : 'DUSGR', // data successiva od uguale al giorno della richiesta
//	QD    : 'QD'     // qualsiasi data
//}
//
///**
// * @properties={typeid:35,uuid:"CC1BE0F2-1002-4030-9B11-DAC05786D78F",variableType:-4}
// */
//var TipiGiustificativiParametriMIOValori = 
//{
//	M15 : 'M15',  // a quarto d'ora
//	M30 : 'M30'   // a mezz'ora
//}
//
///**
// * @properties={typeid:35,uuid:"048D5137-E9F9-4EFA-B3FA-FA7473D33A97",variableType:-4}
// */
//var TipiGiustificativiParametriNOEValori = 
//{
//	STD : 'STD', // intestazione standard
//	NOM : 'NOM'  // nominativo lavoratore nel testo della mail
//}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E2E995A9-5289-4173-89F8-4A92A4EE0750",variableType:93}
 */
var TODAY;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"03DDB01A-04FD-40F8-BCFD-9437991241FF",variableType:4}
 */
var vEmployeeCurrentEmployerConvertedID = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E553DD90-6787-4F9C-AC21-ED88E8D79113",variableType:4}
 */
var vEmployeeCurrentEmployerID = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"00534ABE-BE9F-4692-8E02-CABAE6EBFB75"}
 */
var WS_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"CEC69D71-A27D-4AC8-87D3-1CA01266AE71"}
 */
var WS_MULTI_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"BDCD4900-444E-4305-86AA-A9F5DFCBBBEE"}
 */
var WS_PSL_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"8C2189AE-8BEA-494F-BD0C-04E069718D89"}
 */
var WS_REPORT_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"E350187E-92F3-4CBA-8E24-EAF8477E6E27"}
 */
var WS_LU_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"18675A41-4506-4B25-82F9-DAF8C216E8F1"}
 */
var WS_PV_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"386DB394-0F55-423E-A1FC-47471150B41C"}
 */
var WS_RFP_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"BC2A3A40-30AE-45C1-95B2-60D9BC60A9E0"}
 */
var WS_ADMIN_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"84AB4BE3-0D03-43A4-BDBA-5D8FC8C5A4FF"}
 */
var WS_TIMBR_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"60240D49-6AEA-4074-92F4-95B9C86BF0AB"}
 */
var WS_EVENTI_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"6503AAD7-5556-4EDB-8C90-7AEC457609D0"}
 */
var WS_GIORN_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"23B26E60-C576-4046-BA4C-0489800E0AE4"}
 */
var WS_STORICO_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"1CF59426-D9AF-4FE4-8631-733FD6EE5B2D"}
 */
var WS_OP_URL = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"D9C8D685-CA61-47DA-96A2-4827F6A3F115"}
 */
var WS_NL_URL = null;

/**
 * @properties={typeid:24,uuid:"8626FE2F-44B0-4590-9C54-AC8201A9CBC3"}
 */
function InitSharedVariables()
{
	TODAY = scopes.date.GetDatePart(new Date());
}

/**
 * @AllowToRunInFind
 *
 * Returns the ID for the operation type corresponding with the code provided
 * 
 * @param {String} code the code of the operation type to look for
 * 
 * @return {Number} the ID of the operation type, or -1 if not found
 *
 * @properties={typeid:24,uuid:"51DF5A02-72D3-44F5-8EDA-0B29FC305975"}
 */
function getOpType(code)
{
	/** @type {JSFoundset<db:/ma_log/operationtype>} */
	var opTypeFs = databaseManager.getFoundSet(globals.Server.MA_LOG, globals.Table.OPERATION_TYPE);
	if(opTypeFs && opTypeFs.find())
	{
		opTypeFs.codice = code;
		if(opTypeFs.search() > 0)
			return opTypeFs.idtipooperazione;
	}
	
	return -1;
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"5F75FD4C-0782-4871-8A3A-6E282B85CF29"}
 */
function getOperation(opId)
{
	/** @type {JSFoundset<db:/ma_log/operationtype>} */
	var opTypeFs = databaseManager.getFoundSet(globals.Server.MA_LOG, globals.Table.OPERATION_TYPE);
	if(opTypeFs && opTypeFs.find())
	{
		opTypeFs.idtipooperazione = opId;
		opTypeFs.search();
	}
	
	return opTypeFs.getSelectedRecord();
}

/**
 * @properties={typeid:24,uuid:"06E9BE53-1EA9-4C95-B9BF-6205B29E599E"}
 */
function isEsterna()
{
	return globals._tipologiaDitta === globals.Tipologia.STANDARD;
}

/**
 * @properties={typeid:24,uuid:"A6963F5D-9968-4048-A864-3FF3EB4CCC97"}
 */
function exitWithError(error) 
{
	globals.ma_utl_logError(error, LOGGINGLEVEL.FATAL);
	
	var solution = application.getSolutionName();
	security.logout(solution);
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"AFCE0459-1643-460C-826C-7EB83357443A"}
 */
function convert_DitteCliente2Sede(value)
{
	var ditte = datasources.db.ma_anagrafiche.ditte.getFoundSet();
	if(!ditte.loadRecords(value))
		throw new Error(i18n.getI18NMessage('ma.err.no_record_with_value', [value]));

	if(ditte.tipologia == globals.Tipologia.ESTERNA)
		return value;
	
	/** @type {JSFoundset<db:/ma_anagrafiche/v_ditte_cliente2sede>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'v_ditte_cliente2sede');
	if (fs && fs.find())
	{
		fs.iddittacliente = value;
		fs.v_ditte_cliente2sede_to_ditte.tipologia = globals.ComparisonOperator.NE + globals.Tipologia.ESTERNA;
		
		if(fs.search() > 0 && fs.iddittasede)
			return fs.iddittasede;
		
		throw new Error(scopes.string.Format('Nessuna ditta trovata con id cliente @0', value));
	}
	
	throw new Error(i18n.getI18NMessage('ma.err.findmode'));
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"13F6D06E-B8D8-477B-9C3A-94A6E390A46D"}
 */
function convert_DitteSede2Cliente(value)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/v_ditte_cliente2sede>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'v_ditte_cliente2sede');
	if (fs && fs.find())
	{
		fs.iddittasede = value;
		if(fs.search() > 0 && fs.iddittacliente)
			return fs.iddittacliente;
		
		throw new Error(i18n.getI18NMessage('ma.err.norecord'));
	}
	
	throw new Error(i18n.getI18NMessage('ma.err.findmode', [this.name]));
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"592B8464-A07A-4622-B934-999E87917ABD"}
 */
function convert_LavoratoriSede2Cliente(value)
{
	/**
	 * Convert the id hq -> customer
	 */
	/** @type {JSFoundset<db:/ma_anagrafiche/v_lavoratori_cliente2sede>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'v_lavoratori_cliente2sede');
	if(fs && fs.find())
	{
		fs.idlavoratoresede = value;
		if(fs.search() > 0 && fs.idlavoratorecliente)
			return fs.idlavoratorecliente;
		
		throw new Error(i18n.getI18NMessage('ma.err.norecord'));
	}
	
	throw new Error(i18n.getI18NMessage('ma.err.findmode', [this.name]));
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"4F6B834E-33CA-48EA-8F3D-BA1F54B08F43"}
 */
function convert_LavoratoriCliente2Sede(value)
{
	/**
	 * Convert the id customer -> hq
	 */
	 /** @type {JSFoundset<db:/ma_anagrafiche/v_lavoratori_cliente2sede>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'v_lavoratori_cliente2sede');
	if(fs && fs.find())
	{
		fs.idlavoratorecliente = value;
		if(fs.search() > 0 && fs.idlavoratoresede)
			return fs.idlavoratoresede;
		
		throw new Error(i18n.getI18NMessage('ma.err.norecord'));
	}
	
	throw new Error(i18n.getI18NMessage('ma.err.findmode', [this.name]));
}

/**
 * Called for performing a conversion between a database value and a displayed value.
 *
 * @param databaseValue The database value.
 * @param {String} dbType The type of the database column. Can be one of "TEXT", "INTEGER", "NUMBER", "DATETIME" or "MEDIA".
 *
 * @returns {Object} the displayed value.
 *
 * @properties={typeid:24,uuid:"4CCE04D5-D9AD-47C0-A8F8-EA460D55FC2D"}
 */
function reader_DitteSede2Cliente(databaseValue, dbType) 
{
	return convert_DitteSede2Cliente(databaseValue);
}

/**
 * Called for performing a conversion between a displayed value and a database value.
 *
 * @param displayedValue The displayed value.
 * @param {String} dbType The type of the database column. Can be one of "TEXT", "INTEGER", "NUMBER", "DATETIME" or "MEDIA".
 *
 * @returns {Object} the database value.
 *
 * @properties={typeid:24,uuid:"804D94FF-6CBC-428D-AB31-A385FF7CED03"}
 */
function writer_DitteCliente2Sede(displayedValue, dbType) 
{
	return convert_DitteCliente2Sede(displayedValue);
}

/**
 * Return the right server according to the current user (hq vs. customer)
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"7EAB037F-3FBD-4E09-99E6-299EED27C19E"}
 */
function getSwitchedServer(server) 
{
	return (globals.isCliente() && globals.customer_dbserver_name) || server;
}

/**
 * @param {String} url
 * @param		   params
 * 
 * @properties={typeid:24,uuid:"AE26BB5C-5EF5-4F37-8572-62E3814BEA86"}
 * @AllowToRunInFind
 */
function getWebServiceResponse(url, params)
{
	var client = globals.getHttpClient();
	
	/**
	 * Aggiungiamo il parametro per la connessione al database cliente
	 */
	if(globals.isCliente())
		params.databasecliente = globals.customer_db_name;
	
	params.tipoconnessione = params.tipoconnessione != null ? params.tipoconnessione : globals.getTipoConnessione();
	params.idgruppoinstallazione = params.idgruppoinstallazione //|| globals.getGruppoInstallazioneDitta(params.idditta);
	
	if(params.user_id == null)
	   params.user_id = security.getUserName();
	if(params.client_id == null)
	   params.client_id = security.getClientID();
	
	/**
	 * Remove all leading underscores, if any
	 */
	var jsonParams = plugins.serialize.toJSON(params).replace(/_([a-zA-Z0-9]+)(\\?":)/g, '$1$2');
				
	var request = client.createPostRequest(url);
	switch(WS_DOTNET_CASE)
	{
		case WS_DOTNET.CORE:
		request.addHeader('Content-type','application/json');	
		break;
		default: 
		request.addHeader('Content-type','text/json');
		break;
	}	
	request.setBodyContent(jsonParams);
	
	var response = request.executeRequest();
	if (response)
	{
		var msg = '';
		// We always expect a Json result
		var responseBody = response.getResponseBody();
		var responseObj  = plugins.serialize.fromJSON(responseBody);
		var statusCode   = response.getStatusCode();
		
		switch (statusCode)
		{
			case globals.HTTPStatusCode.OK:
				break;
				
			// Conflict
			case globals.HTTPStatusCode.CONFLICT:
				var message = responseObj.message || 'È in corso un\'altra operazione sui dipendenti selezionati';
			
				if(responseObj.blocked)
				{
					/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>} */
					var employeesFoundset = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.LAVORATORI);
					if (employeesFoundset && employeesFoundset.find())
					{
						employeesFoundset.idlavoratore = responseObj['blocked'];
						if(employeesFoundset.search() > 0)
						{
							message += '<p>';
							for(var emp = 1; emp <= employeesFoundset.getSize(); emp++)
								message += employeesFoundset.getRecord(emp)['nominativo'] + '\n';

							message += '</p>';
						}
					}
				}
				
				msg = globals.convertString(message);
				globals.ma_utl_showErrorDialog(msg, 'i18n:svy.fr.lbl.excuse_me');				
				break;
	
			case globals.HTTPStatusCode.INTERNAL_ERROR:
				if(responseObj.message)
					msg = responseObj.message;
				else
					msg = url + ' : Errore di elaborazione, rieffettuare l\'operazione o contattare l\'assistenza.'
				
				break;
	
			case globals.HTTPStatusCode.NOT_IMPLEMENTED:
				msg = 'Il servizio richiesto non è disponibile, contattare l\'assistenza';
				break;
				
//			case globals.HTTPStatusCode.UNAUTHORIZED:
//				if(globals.loginToWebService(security.getUserName(), security.getClientID()))
//					return getWebServiceResponse(url, params);
//				break;
			case globals.HTTPStatusCode.FORBIDDEN:
				msg = 'L\'utente non dispone delle autorizzazioni necessarie';
				break;

			case globals.HTTPStatusCode.REQUEST_TIMEOUT:
				msg = 'Errore di timeout durante l\'accesso alla risorsa' + url;
				break;
				
			case globals.HTTPStatusCode.NOT_FOUND:
				msg = 'La risorsa richiesta non esiste: ' + url;
				break;
			
			default:
				msg = 'Errore sconosciuto, codice di risposta: ' + statusCode + '.\nContattare il servizio di assistenza.';
				break;			
		}
		
		if(msg != '')
		{
			globals.ma_utl_logError(new Error(msg));		
			globals.ma_utl_showErrorDialog(msg, 'i18n:svy.fr.lbl.excuse_me');
		}
		
		return responseObj;
	}
	else
	{
		globals.ma_utl_showErrorDialog('<html>Il server non risponde alla richiesta.<br/>Controllare l\'accesso ad internet, effettuare nuovamente il login e, se il problema persiste, contattare il servizio di assistenza.</html>', 'i18n:svy.fr.lbl.excuse_me');
	    return { returnValue: false, message: 'Il server non risponde, riprovare' };
	}
}

/**
 * @param {String} url
 * @param {Object} params
 * @param {String} dbName
 * 
 * @return {Object}
 * 
 * @properties={typeid:24,uuid:"A408074F-45FB-42F1-B242-03B8E2DA1AC8"}
 * @AllowToRunInFind
 */
function getWebServiceResponseWS(url, params, dbName)
{
	var client = globals.getHttpClient();
	
	/**
	 * Aggiungiamo il parametro per la connessione al database cliente
	 */
	params.databasecliente = dbName;
	
	params.tipoconnessione = Connessione.CLIENTE;//params.tipoconnessione != null ? params.tipoconnessione : globals.getTipoConnessione();
	
	/**
	 * Remove all leading underscores, if any
	 */
	var jsonParams = plugins.serialize.toJSON(params).replace(/_([a-zA-Z0-9]+)(\\?":)/g, '$1$2');
	    
//	application.output('jsonParams are - ' + jsonParams,LOGGINGLEVEL.ERROR);		
			
	var request = client.createPostRequest(url);

	request.addHeader('Content-type','application/json');	
	request.setBodyContent(jsonParams);
	
	var response = request.executeRequest();	
	if (response)
	{
		// We always expect a Json result
		var responseBody = response.getResponseBody();
		/** @type {{ message: String }} */
		var responseObj = plugins.serialize.fromJSON(responseBody);
		
		switch (response.getStatusCode())
		{
			case globals.HTTPStatusCode.OK:
				break;
				
			// Conflict
			case globals.HTTPStatusCode.CONFLICT:
				var message = responseObj.message;
				globals.ma_utl_showErrorDialog(globals.convertString(message), 'i18n:svy.fr.lbl.excuse_me');				
				break;
	
			case globals.HTTPStatusCode.INTERNAL_ERROR:
				var msg;
				if(responseObj.message)
					msg = responseObj.message;
				else
					msg = 'Errore di elaborazione, contattare lo studio.'
				
				application.output(msg, LOGGINGLEVEL.ERROR);
				globals.ma_utl_showErrorDialog(msg);
				break;
	
			case globals.HTTPStatusCode.NOT_IMPLEMENTED:
				globals.ma_utl_showErrorDialog('Il servizio richiesto non è disponibile, contattare l\'assistenza', 'Errore del server');
				break;
				
			case globals.HTTPStatusCode.UNAUTHORIZED:
			case globals.HTTPStatusCode.FORBIDDEN:
				globals.ma_utl_showErrorDialog('L\'utente non dispone delle autorizzazioni necessarie');
				break;
				
			case globals.HTTPStatusCode.REQUEST_TIMEOUT:
//				if(globals.loginToWebService(security.getUserName(), security.getClientID()))
//					return getWebServiceResponse(url, params);
				
				globals.ma_utl_showErrorDialog('Timeout : il server ha impiegato troppo tempo a rispondere');
				break;
			
			default:
				application.output(responseObj.message, LOGGINGLEVEL.ERROR);
			     globals.ma_utl_showErrorDialog
					(
				    	  'Il server non è riuscito a prendere in carico la richiesta.\nSe il problema persiste, contattare lo studio'
						, 'Errore del server'
					);
				break;			
		}
	}
	else
	    globals.ma_utl_showErrorDialog('Il server non risponde, riprovare ', 'Errore del server');
	
	return responseObj;
}

/**
 * @param {String} username
 * @param {String} clientID
 * 
 * @properties={typeid:24,uuid:"6DE7AB80-6093-40A6-8A25-E3DE4F8ADF1B"}
 */
function loginToWebService(username, clientID)
{	
	var loginUrl = globals.WS_URL + '/Users/Set';
	var loginRequest = globals.getHttpClient().createPostRequest(loginUrl);
		loginRequest.addParameter('user_id', username);
		loginRequest.addParameter('client_id', clientID);
			
	var response = loginRequest.executeRequest();
	if (response && response.getStatusCode() === globals.HTTPStatusCode.OK)
	{
		application.output(response.getResponseBody(), LOGGINGLEVEL.INFO);
		return true;
	}
	else
	if (response)
		application.output(response.getStatusCode() + ': ' + response.getResponseBody(), LOGGINGLEVEL.FATAL);
	
	return false;
}

/**
 * Effettua il login al web service per il servizio RESTful web service
 * @param username
 * @param clientID
 * @param wsUrl
 *
 * @properties={typeid:24,uuid:"080E87D8-A7E6-4223-A690-BFCE3035CF61"}
 */
function loginToWebServiceREST(username, clientID, wsUrl)
{
	var loginUrl = wsUrl + '/Users/Set';
	var loginRequest = globals.getHttpClient().createPostRequest(loginUrl);
		loginRequest.addParameter('user_id', username);
		loginRequest.addParameter('client_id', clientID);
			
	var response = loginRequest.executeRequest();
	if (response && response.getStatusCode() === globals.HTTPStatusCode.OK)
	{
		application.output(response.getResponseBody(), LOGGINGLEVEL.INFO);
		return true;
	}
	else
	if (response)
		application.output(response.getStatusCode() + ': ' + response.getResponseBody(), LOGGINGLEVEL.FATAL);
	
	return false;
}

/**
 * Converte il periodo passato in data. Può ricevere una stringa od un intero
 * 
 * @param periodo
 * 
 * @return {Date}
 *
 * @properties={typeid:24,uuid:"81449F29-5A40-449F-854A-FEAF045B1E9C"}
 */
function toDate(periodo)
{
	if(typeof periodo === 'string')
		return utils.parseDate(periodo, PERIODO_DATEFORMAT);
	else
		return utils.parseDate(periodo.toString(10), PERIODO_DATEFORMAT);
}

/**
 * Ritorna il periodo come intero nella forma aaaaMM (es. 201401)
 * 
 * @param {Number} anno
 * @param {Number} mese
 * 
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"B2B62DB7-2D8C-497E-94FD-51A77405C4B9"}
 */
function toPeriodo(anno, mese)
{
	return anno * 100 + mese;
}

/**
 * @param date
 * 
 * @return {Number} il periodo nel formato yyyyMM
 *
 * @properties={typeid:24,uuid:"AF98E404-2D47-4B8B-A2A7-5E758881B622"}
 */
function ma_utl_dateToPeriodo(date)
{
	return date && date.getFullYear() * 1e2 + (date.getMonth() + 1); 
}

/**
 * @AllowToRunInFind
 * 
 * @param {Number} idditta
 *
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"D7452AE5-42B3-40B4-AB60-CAB8F5E8482F"}
 */
function getTipologiaDitta(idditta)
{
	/** @type JSFoundset<db:/ma_anagrafiche/ditte>*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
	if(fs.find())
	{
		fs.idditta = idditta;
		fs.search();
		if(fs.getSize() > 0)
			return fs.tipologia;
		else
			return -1;
	}
	return -1;
}

/**
 * @param {Number} idditta
 * 
 * @properties={typeid:24,uuid:"481D9B47-84D4-400A-A6E2-4E617B862A86"}
 * @AllowToRunInFind
 */
function getTipoDittaEsterna(idditta)
{
	/** @type JSFoundset<db:/ma_anagrafiche/ditte_legami>*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_LEGAMI);
	if(fs.find())
	{
	   fs.idditta = idditta;
	   fs.search();
	   if(fs.getSize() > 0)
		   return fs.tipoesterni;
	   else 
		   return -1;
	}
	return -1;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo della ditta standard alla quale è legata la ditta richiesta
 * 
 * @param {Number} idDittaInterinale
 * 
 * @return Number
 * 
 * @properties={typeid:24,uuid:"6CAB330D-4E73-4DE8-A275-BBF6C1A051A8"}
 */
function getDittaRiferimento(idDittaInterinale)
{
	/** @type {JSFoundset <db:/ma_anagrafiche/ditte>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fs.find())
    {
    	fs.idditta = idDittaInterinale;
    	
    	if(fs.search())
    	   return (fs.ditte_to_ditte_legami != null) && fs.ditte_to_ditte_legami.iddittariferimento;
    	
    }
    
    return null;
}

/**
 * Restituisce il codice della ditta principale associata al gruppo di installazione
 * 
 * @param {Number} idGruppoInst
 *
 * @properties={typeid:24,uuid:"3662506A-970E-4560-BBE0-9777294A7C2F"}
 * @AllowToRunInFind
 */
function getCodiceDittaPrincipaleGruppoInstallazione(idGruppoInst)
{
	/** @type {JSFoundset<db:/ma_presenze/e2sediinstallazione>}*/
	var fsSedi = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.SEDI_INSTALLAZIONE);
	if(fsSedi.find())
	{
		fsSedi.idgruppoinst = idGruppoInst;
		
		if(fsSedi.search())
			return fsSedi.cod_ditta;
	}
	
	return null;
}

/**
 * Ritorna un array di dipendenti che rientrano nel gruppo lavoratori impostato
 * 
 * @param params
 * @param idditta
 * 
 * @return {Array<Number>} l'elenco di ID dei dipendenti compresi nel gruppo lavoratori
 *
 * @properties={typeid:24,uuid:"3A1D952B-EC18-44F1-90A4-A504FDAFABC5"}
 */
function getLavoratoriGruppo(params,idditta)
{
	/** @type {{ returnValue: Boolean, ftrString: String }} */
	var response = globals.getFiltroDipInEntrataGiornaliera(params);
	if (response && response.returnValue === true)
	{
		/** @type {String} */
		var ftrString = response.ftrString;
		if (ftrString)
		{
			//il filtro da applicare tramite query è la stringa ritornata in precedenza
			var sqlString = "SELECT idLavoratore FROM V_Lavoratori L WHERE idditta = " + idditta + ' AND ' + ftrString;
			var ftrDataset = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE, sqlString, null, -1);
			var idDipendenti = ftrDataset.getColumnAsArray(1);
			
			return idDipendenti;
		}
		
		return [];	
	}
	
	return null;
}

/**
 * Restituisce l'array con gli id dei lavoratori del gruppo di ditte attivi nel periodo richiesto
 * 
 * @param {Date} dal
 * @param {Date} al
 * 
 * @return Array<Number>
 * 
 * @properties={typeid:24,uuid:"B56A9436-CE96-4B8C-B6C3-70F9814BBC4A"}
 * @AllowToRunInFind
 */
function getLavoratoriDalAl(dal,al)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fs.find())
	{
		fs.assunzione = '<=' + utils.dateFormat(al,globals.ISO_DATEFORMAT);
		fs.cessazione = '^||>=' + utils.dateFormat(dal,globals.ISO_DATEFORMAT);
	    if(fs.search())
	    {
	    	fs.sort('lavoratori_to_persone.nominativo asc');
	       	return globals.foundsetToArray(fs,'idlavoratore');
	    }
	}
	
	return [];
}

/**
 * Restituisce l'array con gli id dei lavoratori della ditta richiesta attivi nel periodo richiesto
 * 
 * @param {Number} idDitta
 * @param {Date} [dal]
 * @param {Date} [al]
 *
 * @return Array<Number>
 * 
 * @properties={typeid:24,uuid:"84B2AE4E-3F95-4C45-B1E3-2C895E69D4B3"}
 * @AllowToRunInFind
 */
function getLavoratoriDittaDalAl(idDitta,dal,al)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fs.find())
	{
		fs.idditta = idDitta;
		if(al)
		   fs.assunzione = '<=' + utils.dateFormat(al,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		if(dal)
		   fs.cessazione = '^||>=' + utils.dateFormat(dal,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
	    
		if(fs.search())
	    {
	    	fs.sort('lavoratori_to_persone.nominativo asc');
	    	return globals.foundsetToArray(fs,'idlavoratore');
	    }
	}
	
	return [];
}

/**
 * Recupera la parte di stringa (dinamica) da utilizzare per il filtraggio 
 * dei dipendenti in entrata in giornaliera
 * 
 * @param {Object} params
 * 
 * @properties={typeid:24,uuid:"B9328053-1F20-4FF8-82C5-0B2867E82A48"}
 */
function getFiltroDipInEntrataGiornaliera(params)
{
	var url = globals.WS_DOTNET_CASE == globals.WS_DOTNET.CORE ? globals.WS_URL + "/Giornaliera/FiltroEntrataInGiornaliera" : WS_URL + "/Trattamenti/FiltroEntrataInGiornaliera";
	return getWebServiceResponse(url,params);	
}

/**
 * Recupera la parte di stringa (dinamica) da utilizzare per la costruzione
 * della tabella di programmazione turni
 * 
 * @param {Object} params
 * 
 * @properties={typeid:24,uuid:"206F8034-AD73-425E-B135-98D90B75AC49"}
 */
function getFiltroProgrammazioneTurni(params)
{
	var url = WS_URL + "/Trattamenti/FiltroEntrataProgrammazioneTurni";
	return getWebServiceResponse(url,params);	
}

/**
 * @param 				requiredFields
 * @param {JSFoundset} 	fs
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"624A0DC8-D8BA-444D-AC30-4CCC47532AB1"}
 */
function validateRequiredFields(requiredFields, fs)
{
	if(!requiredFields || !fs)
		return true;
	
	for(var r = 1; r <= fs.getSize(); r++)
	{
		var record = fs.getRecord(r);
		var msg    = record['nominativo'] + ': ';
		
		for(var rf in requiredFields)
		{
			var dataprovider = rf;
			var found 		 = false;
			// Don't consider 0 or false as not entered
			if (record[dataprovider] !== 0 && record[dataprovider] !== false && !record[dataprovider]) 
			{
				//field is not entered
				msg += dataprovider + i18n.getI18NMessage('svy.fr.dlg.is_required');
				found = true;
				break;
			}
		}
		
		if(found)
			globals.nav.validation_msg += msg + '\n';
	}
	
	if(found)
		globals.ma_utl_showErrorDialog(globals.nav.validation_msg);
	
	return !found;
}

/**
 * Used in the lookup for disabling records based on the user's request
 * 
 * @param {JSRenderEvent} event
 *
 * @properties={typeid:24,uuid:"AFE9EE48-36B1-4849-8F6B-2395AA6BDA56"}
 */
function onRenderDisabled(event)
{
	var record 	   = event.getRecord();
	var renderable = event.getRenderable();
	if(record && (record['disabled_calc'] || record['unselectable_calc']))
	{
		renderable.enabled = false;
		renderable.bgcolor = '#cccccc';
		renderable.fgcolor = '#999999';
	}
}

/**
 * Copy a date object to another, to the milliseconds.
 * The destination object is created if it does not exist.
 *
 * @param {Date} dest
 * @param {Date} source
 *
 * @properties={typeid:24,uuid:"A33944C4-77A1-49E9-AF85-8B62FF1F62A7"}
 */
function ma_utl_copyDate(dest, source)
{
	if(!source)
		return null;
	
	if(!dest)
		dest = new Date();
			
	dest.setTime(source.getTime());
		
	return dest;
}

/**
 * @properties={typeid:24,uuid:"68BF79D3-5ED3-4EF7-BAA5-89226F333775"}
 */
function ma_utl_getTopForm()
{
	return forms[globals.nav.form_view_01];
}

/**
 * @return {RuntimeForm}
 * 
 * @properties={typeid:24,uuid:"DEA7B886-4C4D-427C-BE07-BFFF24471274"}
 */
function ma_utl_getBottomForm()
{
	return forms[globals.nav.form_view_02];
}

/**
 * @properties={typeid:24,uuid:"EED9DB93-43E0-4B2D-AE99-D2BD68BC962D"}
 */
function ma_utl_lav_convertId(idlavoratore)
{
	return globals.isCliente() ? globals.ma_utl_lav_cliente2Sede(idlavoratore) : idlavoratore;
}

/**
 * @properties={typeid:24,uuid:"2C567832-975D-4F62-8F72-E83C577F71A9"}
 * @AllowToRunInFind
 */
function ma_utl_lav_cliente2Sede(idlavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.LAVORATORI);
	if (fs && fs.find())
	{
		fs.idlavoratore = idlavoratore;
		if(fs.search() > 0)
			return fs.idlavoratore_sede;
		
		throw new Error(i18n.getI18NMessage('ma.err.norecord'));
	}
	
	throw new Error(i18n.getI18NMessage('ma.err.findmode', [this.name]));
}

/**
 * @properties={typeid:24,uuid:"2D8231F8-DDFE-4A6B-95D9-6D01385F2608"}
 */
function ma_utl_lav_toSede(idlavoratore)
{
	return globals.isCliente() ? globals.convert_LavoratoriCliente2Sede(idlavoratore) : idlavoratore;
}

/**
 * @param idlavoratore
 *
 * @properties={typeid:24,uuid:"734FF61E-57B4-447A-8A9B-057C79E00E9F"}
 */
function ma_utl_lav_toCliente(idlavoratore)
{
	return globals.isCliente() ? globals.convert_LavoratoriSede2Cliente(idlavoratore) : idlavoratore;
}

/**
 * @properties={typeid:24,uuid:"3C8C46DB-8F2D-48A3-9320-25E67A0F6ADE"}
 */
function ma_utl_ditta_toSede(idditta)
{
	return globals.isCliente() ? globals.convert_DitteCliente2Sede(idditta) : idditta;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param idditta
 *
 * @properties={typeid:24,uuid:"7BBA530A-A222-4D83-83B8-C873F76EE67B"}
 */
function ma_utl_ditta_toCliente(idditta)
{
	return globals.isCliente() ? globals.convert_DitteSede2Cliente(idditta) : idditta;
}

/**
 * @properties={typeid:24,uuid:"B77D3247-1862-4052-8338-EFB9E4DE6AEB"}
 * @AllowToRunInFind
 */
function ma_utl_ditta_cliente2Sede(idditta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.DITTE);
	if (fs && fs.find())
	{
		fs.idditta = idditta;
		if(fs.search() > 0)
			return fs.idditta_sede;
		
		throw new Error(i18n.getI18NMessage('ma.err.norecord'));
	}
	
	throw new Error(i18n.getI18NMessage('ma.err.findmode', [this.name]));
}

/**
 * Ritorna il periodo dell'ultimo cedolino stampato per la ditta in oggetto
 * 
 * @param  {Number} idditta
 * @return {Number} periodo
 * 
 * @properties={typeid:24,uuid:"B4B8C6DB-44B8-452F-87FC-C3EB7198D7C9"}
 */
function ma_utl_getUltimoCedolinoStampato(idditta)
{
	var sqlQuery = "SELECT UltimoCedolinoStampato FROM [MA_Anagrafiche].[dbo].[Ditte_UltimoCedolinoStampato] WHERE idDitta = ?;";
	var dataset = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE, sqlQuery, [idditta], -1);
	
	return dataset && dataset.getValue(1, 1);
}

/**
 * @properties={typeid:24,uuid:"11FC7FF7-A6E0-4D87-99E1-2DBE09D20EA0"}
 */
function ma_utl_getOwnerName(ownerid)
{
	if(!ownerid)
		throw new Error('ma_utl_getOwnerName: null argument provided');
	
	return globals.svy_sec_getOwnerName(ownerid, globals.nav_db_framework);
}

/**
 * @properties={typeid:24,uuid:"6962D5AB-CCF2-4EDC-AFC6-E82674734988"}
 */
function ma_utl_demo_effect()
{
	globals.ma_utl_showInfoDialog('Funzionalità non presente nella versione dimostrativa','Versione demo');
}

/**
 * @properties={typeid:24,uuid:"3A24967C-E645-4BE2-8367-280E211C1D8C"}
 */
function ma_utl_under_maintenance()
{
	globals.ma_utl_showInfoDialog('<html>Funzionalità in aggiornamento, verrà ripristinata al più presto.<br/> Contattare lo Studio per maggiori informazioni.<html>','In manutenzione');
}

/**
 * @param {Number} iduser
 *
 * @return String
 * 
 * @properties={typeid:24,uuid:"3EE7D7F9-7D39-46A7-A7FC-8A1562EBD092"}
 * @AllowToRunInFind
 */
function getUserEmailAddress(iduser)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_to_lavoratori>} */
	var fsUserLav = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_to_lavoratori');
	
	if(fsUserLav.find())
	{
		fsUserLav.user_id = iduser;
		if(fsUserLav.search())
		{
			return fsUserLav.sec_user_to_lavoratori_to_sec_user.com_email;
		}
	}
	
	return null;
}

/**
 * @properties={typeid:24,uuid:"1CA67F96-B5A7-4DC5-A7ED-026AA5EAB856"}
 */
function ma_utl_hasKey(keyName)
{
	var sqlQuery = "select security_key_id from sec_security_key where name = ?";
	var dataset  = databaseManager.getDataSetByQuery(globals.Server.SVY_FRAMEWORK, sqlQuery, [keyName], 1);
	var key_id   = dataset && dataset.getValue(1, 1);
	
	//return (key_id && globals.nav.keys.length && globals.nav.keys.indexOf(key_id) > -1) ? true : false;
	if(key_id 
			&& !globals.ma_utl_isNullOrUndefined(globals.nav.keys) 
			&& globals.nav.keys.indexOf(key_id.toString()) > -1)
//			&& globals.nav.keys.split(',').indexOf(key_id.toString()) > -1)
		return true;
	else
		return false;
}

/**
 * @properties={typeid:24,uuid:"06CEE29F-D96D-4A54-A120-AEAC068487E2"}
 */
function ma_utl_hasModule(moduleName)
{
	var sqlQuery  = "select \
						som.module_id \
					 from \
					 	sec_owner_in_module som \
						inner join sec_module sm \
							on sm.module_id = som.module_id \
					 where \
						som.owner_id = ? \
						and sm.name = ? \
						and (som.start_date is null or som.start_date <= ?) \
						and (som.end_date is null or som.end_date >= ?)";
	
	var dataset   = databaseManager.getDataSetByQuery(globals.Server.SVY_FRAMEWORK, sqlQuery, [globals.svy_sec_lgn_owner_id, moduleName, new Date(), new Date()], 1);
	var module_id = dataset && dataset.getValue(1, 1);
	
	return module_id ? true : false;
}

/**
 * @properties={typeid:24,uuid:"92CB65D5-2BFB-4FA0-8481-D8F3E5ECB381"}
 */
function ma_utl_hasKeySede()
{
	return ma_utl_hasKey('Sede')
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il valore dell'identificativo relativo al nome della chiave specificato
 * (null se il nome non esiste)
 * 
 * @param key_name
 *
 * @properties={typeid:24,uuid:"533041BB-DB4D-453E-97B8-92ECB6237A58"}
 */
function ma_utl_getSecurityKeyId(key_name)
{
	/** @type {JSFoundset<db:/svy_framework/sec_security_key>}*/
	var fsSecKey = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_security_key');
	if(fsSecKey.find())
	{
		fsSecKey.name = key_name;
		if(fsSecKey.search())
			return fsSecKey.security_key_id;
				
	}
	return null;
}

/**
 * Restituisce true se la specifico gruppo di utenti ha esplicitamente associata la specifica chiave
 * 
 * @param group_id
 * @param key_id
 *
 * @properties={typeid:24,uuid:"2FC76729-736F-456A-9B3C-36B68BDA253D"}
 * @AllowToRunInFind
 */
function ma_utl_userGroupHasKey(group_id,key_id)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_right>} */
	var fsUserRight = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_right');
    if(fsUserRight.find())
    {
    	fsUserRight.group_id = group_id;
    	fsUserRight.security_key_id = key_id;
    	fsUserRight.is_denied != 1;
    	
    	if(fsUserRight.search())
    		return true;
    }
    return false;
}

/**
 * Restituisce true se la specifica organizzazione ha esplicitamente associata la specifica chiave
 * 
 * @param user_org_id
 * @param key_id
 *
 * @properties={typeid:24,uuid:"AB849360-FAE8-4864-A91F-113A04C455B3"}
 * @AllowToRunInFind
 */
function ma_utl_userOrgHasKey(user_org_id,key_id)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_right>} */
	var fsUserRight = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_right');
    if(fsUserRight.find())
    {
    	fsUserRight.user_org_id = user_org_id;
    	fsUserRight.security_key_id = key_id;
    	fsUserRight.is_denied != 1;
    	
    	if(fsUserRight.search())
    		return true;
    }
    return false;
}

/**
 * Restituisce true se lo specifico utente ha associata la specifica chiave (tabella sec-user-right)
 * 1 - direttamente dallo user-id
 * 2 - come utente appartenente ad un gruppo che possiede la chiave
 * 3 - come utente appartenente ad una specifica organizzazione che possiede la chiave
 * 
 * @param userId
 * @param keyId
 * @param [groupId]
 * @param [orgId]
 *
 * @properties={typeid:24,uuid:"93A8FF29-F5B0-497B-B63C-E15C5AC286DD"}
 * @AllowToRunInFind
 */
function ma_utl_userHasKey(userId, keyId, groupId, orgId)
{
	var hasKey = false;
	
	// caso 1
	/** @type {JSFoundset<db:/svy_framework/sec_user_right>} */
	var fsUserRight = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_right');
    if(fsUserRight.find())
    {
    	fsUserRight.security_key_id = keyId;
    	fsUserRight.is_denied != 1;
    	fsUserRight.user_id = userId;
    	    	
    	if(fsUserRight.search())
    	{
    		hasKey = true;
    	    return hasKey;
    	}
    }
	
    // caso 2 
    /** @type {JSFoundset<db:/svy_framework/sec_user_right>} */
	var fsGroup = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_right');
    if(fsGroup.find())
    {
    	fsGroup.security_key_id = keyId;
    	fsGroup.is_denied != 1;
    	var dsGroup = getUserGroups(userId);
    	if(dsGroup.getMaxRowIndex())
    	   fsGroup.group_id = dsGroup.getColumnAsArray(1);
    	
    	if(groupId)
    	   fsGroup.group_id = groupId;
    	
    	if(fsGroup.search())
	    {
	    	hasKey = true;
	        return hasKey;
	    }
    	
    }
    
    // caso 3
    /** @type {JSFoundset<db:/svy_framework/sec_user_right>} */
	var fsOrg = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_right');
    if(fsOrg.find())
    {
    	fsOrg.security_key_id = keyId;
    	fsOrg.is_denied != -1;
    	
    	var dsOrgs = getUserOrganizations(userId);
    	if(dsOrgs.getMaxRowIndex())
    	   fsOrg.user_org_id = dsGroup.getColumnAsArray(1);

    	if(orgId)
    		fsOrg.user_org_id = orgId; 
    	
    	if(fsOrg.search())
	    {
	    	hasKey = true;
	        return hasKey;
	    }
    	
    }
    
	return hasKey;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo del proprietario dell'organizzazione specificata
 * 
 * @param user_org_id
 *
 * @properties={typeid:24,uuid:"D1DA1CCF-669C-44A6-A7CE-9944D4630A98"}
 */
function ma_utl_getOwnerFromUserOrgId(user_org_id)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_org>} */
	var fsUserOrg = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_org');
    if(fsUserOrg.find())
    {	
       fsUserOrg.user_org_id = user_org_id;
       if(fsUserOrg.search())
    	   return fsUserOrg.sec_user_org_to_sec_organization.sec_organization_to_sec_owner.owner_id;
    }
    
    return null;
}

/**
 * Restituisce l'id della ditta di cui l'id lavoratore fa parte, -1 se non lo trova
 * 
 * @param {Number} idlavoratore
 *
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"2865E1D9-5406-47C7-9605-DEC89ABF051A"}
 * @AllowToRunInFind
 */
function getDitta(idlavoratore)
{
	var ds = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE,
		                                       "SELECT idDitta FROM Lavoratori WHERE idLavoratore = ?",
											   [idlavoratore],
											   -1);
	var idDitta = ds.getValue(1,1);
	return idDitta;

}

/**
 * Restituisce il codice a partire dall'identificativo della ditta
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} idditta
 *  
 * @properties={typeid:24,uuid:"64023DF4-14BB-4FA9-93DA-4AF823350DEA"}
 */
function getCodDitta(idditta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
	if(fs.find())
	{
		fs.idditta = idditta;
		if(fs.search() > 0)
			return fs.codice;
	}
	
	return -1;
}

/**
 * Restituisce l'identificativo della ditta a partire dal codice fornito
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} codditta
 *
 * @properties={typeid:24,uuid:"252070A7-A410-46E1-BDE1-93BB2DC56D66"}
 */
function getIdDitta(codditta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
	if(fs.find())
	{
		fs.codice = codditta;
		if(fs.search() > 0)
			return fs.idditta;
	}
	
	return -1;
}

/**
 * Restituisce il codice a partire dall'identificativo del lavoratore
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} idlavoratore
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"7F5E9E3B-6920-4C52-85BC-9760047F0AA3"}
 */
function getCodLavoratore(idlavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find())
    {
    	fs.idlavoratore = idlavoratore;
    	if(fs.search() > 0)
    		return fs.codice;
    }
    
    return -1;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo del lavoratore a partire dal suo codice
 * 
 * @param {Number} codLavoratore
 *
 * @properties={typeid:24,uuid:"0872EE97-84FA-4788-B9F6-6EE164B5E10F"}
 */
function getIdLavoratoreDaCodice(codLavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find())
    {
    	fs.codice = codLavoratore;
    	if(fs.search() > 0)
    		return fs.idlavoratore;
    }
    
    return -1;
}

/**
 * Restituisce il nominativo a partire dall'identificativo del lavoratore
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} idlavoratore
 *
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"15365AB7-8068-42F2-8612-80E870146D73"}
 */
function getNominativo(idlavoratore)
{	
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    /** @type {String}*/
    var nominativo = null;
    if(fs.find()) 
    { 
	   fs.idlavoratore = idlavoratore;
	   if(fs.search() > 0)
		  nominativo =  fs.lavoratori_to_persone ? fs.lavoratori_to_persone.nominativo : 
			            (fs.lavoratori_to_lavoratori_personeesterne && fs.lavoratori_to_lavoratori_personeesterne.getSize() > 0
			    		 ? fs.lavoratori_to_lavoratori_personeesterne.nominativo : '?');
     }

     return nominativo;
}

/**
 * Restituisce il cognome del lavoratore a partire dall'identificativo del lavoratore
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} idlavoratore
 * 
 * @return {String} 
 * 
 * @properties={typeid:24,uuid:"B2D3A06F-4715-42C4-82AE-3CA6B6ECF9F3"}
 */
function getCognome(idlavoratore)
{	
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    /** @type {String} */
    var cognome = null;
    if(fs.find()) 
    { 
	   fs.idlavoratore = idlavoratore;
	   if(fs.search() > 0)
		  cognome = fs.lavoratori_to_persone ? (fs.lavoratori_to_persone.cognome ? fs.lavoratori_to_persone.cognome : '?') :
		  		    (fs.lavoratori_to_lavoratori_personeesterne && fs.lavoratori_to_lavoratori_personeesterne.getSize() > 0
		  			? fs.lavoratori_to_lavoratori_personeesterne.cognome : '?');
     }

     return cognome;
}

/**
 * Restituisce il nome del lavoratore a partire dall'identificativo del lavoratore
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} idlavoratore
 *
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"372FF174-FCC5-4BB9-8860-670D8F948EEE"}
 */
function getNome(idlavoratore)
{	
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    /** @type {String} */
    var nome = null;
    if(fs.find()) 
    { 
	   fs.idlavoratore = idlavoratore;
	   if(fs.search() > 0)
		   nome = fs.lavoratori_to_persone ? (fs.lavoratori_to_persone.nome ? fs.lavoratori_to_persone.nome : '?') :
		   (fs.lavoratori_to_lavoratori_personeesterne && fs.lavoratori_to_lavoratori_personeesterne.getSize() > 0
		   		? fs.lavoratori_to_lavoratori_personeesterne.nome : '?'); 
     }

     return nome;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il codice della qualifica del lavoratore richiesto
 * 
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"CA7679F6-5AA6-4532-BD26-57119339CAFD"}
 */
function getQualifica(idlavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find()) 
    { 
	   fs.idlavoratore = idlavoratore;
	   if(fs.search())
		   return fs.codqualifica;
    }
    
    return null;
}

/**
 * Restituisce il codice della posizione INPS a partire dall'identificativo del lavoratore
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} idlavoratore
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"9B15E51F-0FE1-4113-8389-C97387B625B8"}
 */
function getPosInpsLavoratore(idlavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find())
    {
    	fs.idlavoratore = idlavoratore;
    	if(fs.search() > 0)
    		return fs.posizioneinps;
    }
    
    return -1;
}

/**
 * Restituisce l'indirizzo email a partire dall'identificativo del lavoratore
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} idlavoratore
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"B730E7C5-2EA7-4A4D-8BB5-16284FACCD1B"}
 */
function getMailLavoratore(idlavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
    var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find()) 
    { 
	   fs.idlavoratore = idlavoratore;
	   if(fs.search())
	   {
		   /** @type {JSFoundset<db:/ma_anagrafiche/persone_recapiti>}*/
		   var fsRecapiti = fs.lavoratori_to_persone ? fs.lavoratori_to_persone.persone_to_persone_domicili.persone_domicili_to_persone_recapiti : '';
		   if(fsRecapiti && fsRecapiti.find())
		   {
			   fsRecapiti.codtiporecapito = 'M';
			   if(fsRecapiti.search())
				   return fsRecapiti.valore;
		   }
	   }
     }

     return '';
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'indirizzo mail inserito per l'utente Servoy
 * 
 * @param {Number} userid
 *
 * @properties={typeid:24,uuid:"C613756E-72FE-4E00-B4E6-CD3EAA388519"}
 */
function getMailUtente(userid)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user>}*/
	var fs = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user');
	if(fs.find())
	{
		fs.user_id = userid;
		if(fs.search())
		   return fs.com_email;
	}
	
	return null;
}

/**
 * Restituisce lo username dell'utente avente come identificativo user_id
 *
 * @param {Number} userId
 *
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"41579DAB-5819-4637-B3E8-4878D0BDB59E"}
 * @AllowToRunInFind
 */
function getUserName(userId)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user>} */
	var fsUser = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user');
	if(fsUser.find())
	{
		fsUser.user_id = userId;
		if(fsUser.search())
			return fsUser.name_first_names && fsUser.name_last ? 
				   fsUser.name_first_names + ' ' + fsUser.name_last : fsUser.user_name;
	}
	
	return 'Sconosciuto da mail';
}

/**
 * Restituisce il record user_id dell'utente Servoy associato all'idlavoratore del lavoratore di Epi2
 * (sec_user_to_lavoratori_to_sec_user)
 * 
 * @param {Number} idlavoratore
 * @param {String} owner
 * 
 * @return {JSFoundset<db:/svy_framework/sec_user_to_lavoratori>}
 *
 * @properties={typeid:24,uuid:"951E85CA-4B9D-40BF-B962-9DC55EC15DBD"}
 * @AllowToRunInFind
 */
function getUserFromIdLavoratore(idlavoratore,owner)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_to_lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_to_lavoratori');
	if(fs.find())
	{
		fs.idlavoratore = idlavoratore;
		fs.owner_id = owner;
		if(fs.search())
			return fs;
		
	}
	
	return null;
}

/**
 * Restituisce l'user_id dell'utente Servoy associato all'idlavoratore del lavoratore di Epi2
 * (sec_user_to_lavoratori_to_sec_user)
 * 
 * @param {Number} idlavoratore
 * @param {String} owner
 *
 * @properties={typeid:24,uuid:"29E650CE-BF39-4258-8FCD-74DF219B4330"}
 * @AllowToRunInFind
 */
function getUserIdFromIdLavoratore(idlavoratore,owner)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_to_lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_to_lavoratori');
	if(fs.find())
	{
		fs.idlavoratore = idlavoratore;
		fs.owner_id = owner;
		if(fs.search())
			return fs.user_id;
		
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il valore del badge per il lavoratore nel giorno richiesto
 * 
 * @param {Number} idlavoratore
 * @param {Date} giorno
 * @param {Boolean} [occasionale]
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"77AC4FB7-EBB9-4CF8-B226-1360D2B159BD"}
 */
function getNrBadge(idlavoratore,giorno,occasionale)
{
	/** @type{JSFoundset<db:/ma_anagrafiche/lavoratori>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);		
	if (fs.loadRecords(idlavoratore)
			&& fs.lavoratori_to_e2dcg_decorrenza_badge 
			&& fs.lavoratori_to_e2dcg_decorrenza_badge.find()) 
	{
		occasionale ? fs.lavoratori_to_e2dcg_decorrenza_badge.iddcg_campi = 16 : fs.lavoratori_to_e2dcg_decorrenza_badge.iddcg_campi = [2,12];
		occasionale ? fs.lavoratori_to_e2dcg_decorrenza_badge.decorrenza = '>=' + giorno : fs.lavoratori_to_e2dcg_decorrenza_badge.decorrenza = '<=' + giorno;
		if(fs.lavoratori_to_e2dcg_decorrenza_badge.search() > 0) 
		{
			// ordiniamoli in maniera descrescente per determinare l'ultima decorrenza effetivamente inserita 
			fs.lavoratori_to_e2dcg_decorrenza_badge.sort('decorrenza desc');
			return parseInt(fs.lavoratori_to_e2dcg_decorrenza_badge.valore, 10);
		}
	}

	return null;
}

/**
 * Restituisce il valore della percentuale part time del lavoratore
 * 
 * @param {Number} idLavoratore
 *
 * @return Number
 * 
 * @properties={typeid:24,uuid:"FB1EBB99-6235-4B19-BA8A-B21A693CC725"}
 * @AllowToRunInFind
 */
function getPercentualePartTime(idLavoratore)
{
	/** @type{JSFoundset<db:/ma_anagrafiche/lavoratori>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fs.find())
	{
		fs.idlavoratore = idLavoratore;
		if(fs.search())
			return fs.percentualept;
	}
	
	return 0;
}

/**
 * @AllowToRunInFind
 * 
 * Ottieni la ragione sociale della ditta a partire dall'identificativo indicato
 * 
 * @param {Number} idDitta
 *
 * @properties={typeid:24,uuid:"4BE6D480-D3E8-4806-B140-0E58D38D7CB5"}
 */
function getRagioneSociale(idDitta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
	if(fs.find())
	{
		fs.idditta = idDitta;
		if(fs.search())
			return fs.ragionesociale;
	}
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Recupera l'identificativo della commessa a partire dal codice fornito
 * 
 * @param {String} codCommessa
 *
 * @properties={typeid:24,uuid:"3EED27CB-0ED6-4BCB-B444-06A414373A11"}
 */
function getIdCommessaDaCodice(codCommessa)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE);
	if(fsComm.find())
	{
		fsComm.codice = codCommessa;
		if(fsComm.search())
			return fsComm.iddittacommessa;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Recupera l'identificativo della commessa a partire dall'id della fase
 * 
 * @param {Number} idCommessaFase
 *
 * @properties={typeid:24,uuid:"D9C30F95-5909-464D-800B-44220DBC7BF5"}
 */
function getIdCommessaDaIdFase(idCommessaFase)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE_FASI);
	if(fsComm.find())
	{
		fsComm.iddittacommessafase = idCommessaFase;
		if(fsComm.search())
			return fsComm.iddittacommessa;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Recupera l'identificativo della fase della commessa a partire dal codice fornito
 * 
 * @param {String} codCommessaFase
 *
 * @properties={typeid:24,uuid:"3F44A636-81B1-404D-8DA4-20C4625B234C"}
 */
function getIdFaseCommessaDaCodice(codCommessaFase)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE_FASI);
	if(fsComm.find())
	{
		fsComm.codicefase = codCommessaFase;
		if(fsComm.search())
			return fsComm.iddittacommessafase;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Recupera il codice della commessa a partire dall'id fornito
 * 
 * @param {Number} idDittaCommessa
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"07A71385-7A47-40F7-997B-09F0E6316262"}
 */
function getCodiceCommessaDitta(idDittaCommessa)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE);
	if(fsComm.find())
	{
		fsComm.iddittacommessa = idDittaCommessa;
		if(fsComm.search())
			return fsComm.codice;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce la descrizione della commessa a partire dall'id fornito
 * 
 * @param {Number} idDittaCommessa
 *
 * @return {String} 
 * 
 * @properties={typeid:24,uuid:"206EA4B3-1285-4A31-B698-EEE0B78C1616"}
 */
function getDescrizioneCommessaDitta(idDittaCommessa)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE);
	if(fsComm.find())
	{
		fsComm.iddittacommessa = idDittaCommessa;
		if(fsComm.search())
			return fsComm.descrizione;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param idDittaCommessaFase
 *
 * @properties={typeid:24,uuid:"71363618-666B-45A4-8504-6E34E1C03B6F"}
 */
function getCodiceClienteDaIdFase(idDittaCommessaFase)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE_FASI);
	if(fsComm.find())
	{
		fsComm.iddittacommessafase = idDittaCommessaFase;
		if(fsComm.search())
		return fsComm.ditte_commesse_fasi_to_ditte_commesse.ditte_commesse_to_ditte.codice;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Recupera il codice della commessa a partire dall'id fornito
 * 
 * @param {Number} idDittaCommessaFase
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"F0501B51-8C86-4AA1-A219-DE150F0AD583"}
 */
function getCodiceCommessaDittaDaIdFase(idDittaCommessaFase)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE_FASI);
	if(fsComm.find())
	{
		fsComm.iddittacommessafase = idDittaCommessaFase;
		if(fsComm.search())
			return fsComm.ditte_commesse_fasi_to_ditte_commesse.codice;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Recupera il codice della fase della commessa a partire dall'id fornito
 * 
 * @param {Number} idDittaCommessaFase
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"6B8878DA-7F2E-4E5C-BBC3-4D06A5AAEEF5"}
 */
function getCodiceFaseCommessaDitta(idDittaCommessaFase)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_COMMESSE_FASI);
	if(fsComm.find())
	{
		fsComm.iddittacommessafase = idDittaCommessaFase;
		if(fsComm.search())
			return fsComm.codicefase;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Recupera l'identificativo del lavoratore a partire dal codice lavoratore e dal codice ditta
 * (utile per le ditte di tiopo esterno)
 * 
 * @param {Number} codLavoratore
 * @param {Number} codDitta
 *
 * @properties={typeid:24,uuid:"5A16A2BB-C343-431C-B3FF-E347FBDFCF81"}
 */
function getIdLavoratoreFromCodiceDitta(codLavoratore,codDitta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find())
    {
    	fs.codice = codLavoratore;
    	fs.codditta = codDitta;
    	
    	if(fs.search())
    		return fs.idlavoratore;
    }
    
    return null;
}

/**
 * @AllowToRunInFind
 * 
 * Determina se il sesso del lavoratore indicato è femminile
 * 
 * @param {Number} idLavoratore
 *
 * @properties={typeid:24,uuid:"8BE57074-28D7-4CBB-92A0-2BC6CDFFD6BB"}
 */
function isFemmina(idLavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fs.find())
	{
		fs.idlavoratore = idLavoratore;
		if(fs.search())
			return parseInt(fs.codicefiscale.substr(9,2),10) > 40 ? true : false;
	}
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Determina se per il tipo di contratto a cui è associato il lavoratore 
 * è possibile inserire eventi in giornaliera (anche eventi lunghi) e/o per verificare il piano ferie
 * 
 * @param {Number} idLavoratore
 *
 * @properties={typeid:24,uuid:"C252C97C-F36D-46FB-A5D4-99E3858BA22F"}
 */
function isSocioCollaboratore(idLavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fs.find())
	{
		fs.idlavoratore = idLavoratore;
		if(fs.search())
			return (fs.codcontratto == GruppoContrattuale.SOCI 
			       || fs.codcontratto == GruppoContrattuale.COLLABORATORI);
	}
	return false;
}

/**
 * @properties={typeid:24,uuid:"FF945D3C-27E6-408E-AE0D-0CD9BDB8C0ED"}
 */
function ma_utl_setCompanyFilter()
{
	var frm = forms.svy_nav_fr_status_bar;
	var elems = frm.elements;
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.DITTE);
    	
	// se l'utente connesso non è il gestore della rete d'impresa può vedere solo la ditta alla quale egli stesso appartiene
	if(globals.ma_utl_hasKey(globals.Key.RETE_IMPRESA) 
			&& !globals.ma_utl_hasKey(globals.Key.RETE_IMPRESA_GESTORE))
	{
		// idDitta di appartenenza dell'utente responsabile
		var _idDittaResp = globals.getDitta(_to_sec_user$user_id.sec_user_to_sec_user_to_lavoratori.idlavoratore);
		fs.removeFoundSetFilterParam('ftr_dittaNegozioResp');
		fs.addFoundSetFilterParam('idditta','=',_idDittaResp,'ftr_dittaNegozioResp');
	}
	
	fs.loadAllRecords();
		
	if(fs.getSize() == 1)
	{		
		frm.AggiornaFiltroDitta(fs.getSelectedRecord());
		frm.attivaFiltroSuDitta(null);			
	}
	
	elems.lbl_filtro_ditta.visible =
		elems.fld_filtro_ditta.visible =
			elems.btn_filtro_ditta.visible =
				elems.btn_filtro_attiva.visible =
					elems.btn_filtro_disattiva.visible = true;
}

/**
 * @properties={typeid:24,uuid:"9DA68C35-FBEF-469A-A359-29EDEB5A4E6A"}
 */
function ma_utl_generatePwd()
{
	 var keylist = "abcdefghijklmnopqrstuvwxyz1234567890";
	 var temp = ''
	 
	 for (var i = 0; i < 8; i++)
	 	temp += keylist.charAt(Math.floor(Math.random()*keylist.length));
	 
	 return temp;
}

/**
 * @properties={typeid:24,uuid:"F932A88D-189F-4053-9CDC-B12B0A2BB6FF"}
 */
function getServerTimbrature()
{
	var server = application.getServerURL();
	var path;
	switch(server)
	{
		//produzione esterno
	case 'http://webapp.studiomiazzo.it:8080':
	case 'https://webapp.studiomiazzo.it':	
	path = "srv-epiweb";	
	break;
		
	//test esterno
	case 'http://srv-servoy-dev:8080' :
	case 'http://213.92.43.92:8080':
	case 'http://srv-servoy-dev:8081' :
	case 'http://213.92.43.92:8081' :	
	path = "srv-epiweb-dev";
	break;

	//debug interno
	case 'http://srv-webapps-d:8080' : 
	case 'http://localhost:8080' :
	case 'http://localhost:7070' :
	case 'http://213.92.43.78:8080' :	
	path = "srv-webapps-d";
	break;
			    
	default:
	    throw new Error('Server non riconosciuto');
	    break;
	}
	
	return path;
}

/**
 * @AllowToRunInFind
 * 
 * Ottieni l'identificativo dell'organizzazione relativa 
 * 
 * @param user_org_id
 *
 * @properties={typeid:24,uuid:"2829E116-5928-45CE-BF6E-BBFE1EB94A70"}
 */
function getOrganizationId(user_org_id)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_org>}*/
	var fsOrg = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_org');
	if(fsOrg.find())
	{
		fsOrg.user_org_id = user_org_id;
		if(fsOrg.search())
			return fsOrg.organization_id;
	}
	 return null;
}

/**
 * Restituisce il numero della settimana alla quale appartiene il giorno indicato
 * 
 * @param {Date} day
 *
 * @properties={typeid:24,uuid:"F9DB34CD-CACC-4671-A010-C94FFADC4BEE"}
 */
function getWeekNumber(day)
{
    var d = new Date(+day);
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
}

/**
 * Restituisce la data del primo giorno della settimana w per l'anno y
 * 
 * @param {Number} w
 * @param {Number} y
 *
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"229E4CBD-C5C3-4F1A-802C-00273325B956"}
 */
function getDateOfISOWeek(w, y) 
{
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}

/**
 * Restituisce true se la fase della commessa richiede l'autorizzazione per essere
 * portata in giornaliera, false altrimenti
 * 
 * @param {Number} idDittaCommessaFase
 *
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"34FCB288-1732-4DCE-80B7-0F8FC085DD13"}
 * @AllowToRunInFind
 */
function isDaAutorizzareInPresenze(idDittaCommessaFase)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsDitteCommFasi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.DITTE_COMMESSE_FASI);
	if(fsDitteCommFasi.find())
	{
		fsDitteCommFasi.iddittacommessafase = idDittaCommessaFase;
		if(fsDitteCommFasi.search())
			return fsDitteCommFasi.daautorizzare == 1 ? true : false;
	}
	
	return false;
}

/**
 * Restituisce true se la fase della commessa richiede l'autorizzazione per essere
 * considerata in fase di fatturazione, false altrimenti
 * 
 * @param {Number} idDittaCommessaFase
 *
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"E7B56C86-7A36-4688-8A9E-61A929B90348"}
 * @AllowToRunInFind
 */
function isDaAutorizzarePerFatturazione(idDittaCommessaFase)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsDitteCommFasi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.DITTE_COMMESSE_FASI);
	if(fsDitteCommFasi.find())
	{
		fsDitteCommFasi.iddittacommessafase = idDittaCommessaFase;
		if(fsDitteCommFasi.search())
			return fsDitteCommFasi.dafatturare == 1 ? true : false;
	}
	
	return false;
}

/**
 * @AllowToRunInFind
 *
 * Restituisce il valore dell'identificativo della fase della commessa a partire dal record della 
 * tabella commesse_giornaliera
 *
 * @param {Number} commGiornId
 *
 * @properties={typeid:24,uuid:"FEEB9B8F-DC3C-461E-B0D8-A49493BCDAFB"}
 */
function getDittaCommessaFaseDaCommessaGiornaliera(commGiornId) {
	/** @type {JSFoundset<db:/ma_presenze/commesse_giornaliera>}*/
	var fsCommesseGiorn = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.COMMESSE_GIORNALIERA);
	if (fsCommesseGiorn.find()) {
		fsCommesseGiorn.idcommessagiornaliera = commGiornId;
		if (fsCommesseGiorn.search())
			return fsCommesseGiorn.commesse_giornaliera_to_ditte_commesse_fasi.iddittacommessafase;

	}

	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'array con gli identificativi delle fasi della commessa richiesta
 * 
 * @param {Array<Number>} arrIdCommesse
 * 
 * @return {Array<Number>}
 * 
 * @properties={typeid:24,uuid:"96F3F156-8CF8-4497-944B-EEB30DB28B9B"}
 */
function getArrFasiCommessa(arrIdCommesse)
{
	/** @type {Array<Number>} */
	var arrFasiComm = [];
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_commesse_fasi>}*/
	var fsDitteComm = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.DITTE_COMMESSE_FASI);
	if(fsDitteComm.find())
	{
		fsDitteComm.iddittacommessa = arrIdCommesse;
		if(fsDitteComm.search())
		   arrFasiComm = globals.foundsetToArray(fsDitteComm,'iddittacommessafase');
		
	}
	return arrFasiComm;
}

/**
 * Ritorna il numero di settimane presenti nell'anno considerato
 * 
 * @param {Number} anno
 *
 * @properties={typeid:24,uuid:"D8CAA9CE-9D1C-4823-92F4-F6FE0287AA61"}
 */
function getNumSettimaneAnno(anno)
{
	var firstDate = new Date(anno,0,1);
	var lastDate = new Date(anno,11,31);
	
	if(firstDate.getDay() == 4 && lastDate.getDay() == 4)
		return 53;
	else
		return 52;
}

/**
 * Restituisce il codice del modulo per il servizio specificato
 * 
 * @param {Number} idTabServizio
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"2161D234-28CF-4E22-833C-AE101B5439F6"}
 * @AllowToRunInFind
 */
function getCodiceModulo(idTabServizio)
{
	/** @type{JSFoundset<db:/ma_anagrafiche_generale/tab_swcategorie>}*/
	var fsTabCategoria = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE_GENERALE,globals.Table.TAB_SWCATEGORIE);
	if(fsTabCategoria.find())
	{
	   fsTabCategoria.idtabservizio = idTabServizio;
	   if(fsTabCategoria.search())
		  return fsTabCategoria.codice;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo del modulo a partire dal nome del modulo stesso
 * (di norma corrispondente al codice del servizio presente nella tabella tab_swcategorie)
 * 
 * @param {String} nomeModulo
 *
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"A0ED8DC5-1F26-4C11-A2F3-3E1A883D0C31"}
 */
function getIdModuloProprietario(nomeModulo)
{
	/** @type {JSFoundset<db:/svy_framework/sec_module>}*/
	var fsModule = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_module');
	if(fsModule.find())
	{
		fsModule.name = nomeModulo;
		if(fsModule.search())
		   return fsModule.module_id;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il nome del software correntemente associato al modulo desiderato
 * per il proprietario utilizzato alla login
 *  
 * @param {String} module
 * @param {String} [ownerID]
 *
 * @properties={typeid:24,uuid:"1F7CC545-7D77-4F0D-87BC-1DADD1F7F1A3"}
 */
function ma_utl_getSoftware(module,ownerID)
{
	var sw = null;
	var fs;
	if(ownerID)
	{
		/** @type {JSFoundset<db:/svy_framework/sec_owner_in_module>} */
		fs = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_owner_in_module');
		fs.find();
		fs.owner_id = ownerID;
		fs.search();
	}
	else
		fs = _to_sec_owner$lgn_owner_id.sec_owner_to_sec_owner_in_module.duplicateFoundSet();
	
	if(fs.getSize() > 0)
	{
		if (fs.find())
		{
			fs.sec_owner_in_module_to_sec_module.name = module;
			
			if(fs.search() > 0 && fs.start_date <= globals.TODAY && (fs.end_date == null || fs.end_date >= globals.TODAY))
				sw = fs.sw_name;
		}
	}
	return sw;
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param {Array<String>} arrSwName
 * @param {String} [ownerID]
 *
 * @properties={typeid:24,uuid:"B8ED34CE-FA84-438C-AA97-F656630F4BDC"}
 */
function ma_utl_hasSoftware(arrSwName,ownerID)
{
	var fs;
	if(ownerID)
	{
		/** @type {JSFoundset<db:/svy_framework/sec_owner_in_module>} */
		fs = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_owner_in_module');
		fs.find();
		fs.owner_id = ownerID;
		fs.search();
	}
	else
		fs = _to_sec_owner$lgn_owner_id.sec_owner_to_sec_owner_in_module.duplicateFoundSet();
	
	if(fs.getSize() > 0)
	{
		if (fs.find())
		{
			fs.sw_name = arrSwName;			
			if(fs.search() > 0 && fs.start_date <= globals.TODAY && (fs.end_date == null || fs.end_date >= globals.TODAY))
				return true;
		}
	}
	return false;
}

/**
 * Restituisce l'array con tutti i codici di tutti i software associati
 * al proprietario
 *  
 * @param {String} ownerID
 * 
 * @return {Array<String>}
 *
 * @properties={typeid:24,uuid:"FCFE686D-EC3B-4A30-B0DC-8BF0F6B10AC1"}
 */
function ma_utl_getAllSoftwares(ownerID)
{
	var arrSw = [];
	var sqlSw = 'SELECT sw_name \
                 FROM sec_owner_in_module \
                 WHERE start_date < ? \
                 AND (end_date IS NULL OR end_date > ?) \
                 AND sw_name IS NOT NULL \
                 AND owner_id =  ?';
	var parSw = [globals.TODAY,globals.TODAY,ownerID]
	var dsSw = databaseManager.getDataSetByQuery(globals.Server.SVY_FRAMEWORK,sqlSw,parSw,-1);
	arrSw = dsSw.getColumnAsArray(1);
	return arrSw;
}

/**
 * Restituisce un array con gli identificativi dei codici software (come da tabella tab_sw)
 * a partire dall'array di codici passato
 * 
 * @param {Array<String>} arrCodSw
 *
 * @properties={typeid:24,uuid:"FA4C6C30-3847-4E57-BA90-7CD3C380D5F0"}
 * @AllowToRunInFind
 */
function getIdTabSoftwareFromCodice(arrCodSw)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/tab_sw>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.TAB_SW);
	if(fs.find())
	{
		fs.codice = arrCodSw;
		if(fs.search())
			return globals.foundsetToArray(fs,'idtabsw');
	}
	return [];
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce la descrizione del tipo di indirizzo richiesto
 * 
 * @param codTipoIndirizzo
 *
 * @properties={typeid:24,uuid:"3E0576FC-A5E7-45B8-8974-D8312A53AFA1"}
 */
function getDescrizioneTipoIndirizzo(codTipoIndirizzo)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/tab_tipiindirizzo>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,'tab_tipiindirizzo');
	if(fs.find())
	{
		fs.codice = codTipoIndirizzo;
		if(fs.search())
			return fs.descrizione;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo del gruppo di ditte a cui appartiene la ditta indicata
 * 
 * @param {Number} idDitta
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"B16DD416-36BE-47AB-B753-EE892158334A"}
 */
function getGruppoDitte(idDitta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/gruppi_ditte>} */
	var fsGruppi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.GRUPPI_DITTE);
	if(fsGruppi.find())
	{
		fsGruppi.idditta = idDitta;
		if(fsGruppi.search())
			return fsGruppi.idgruppo;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce gli identificativi dei dettagli di classificazione associati al gruppo di classificazione indicato
 * 
 * @param {Number} idGruppoClassificazione
 *
 * @return {Array<Number>}
 *
 * @properties={typeid:24,uuid:"C5BDD2C7-5128-4147-B82F-05783D70095D"}
 */
function getGruppiClassificazioneDettaglio(idGruppoClassificazione)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/gruppi_classificazionidettaglio>}*/
	var fsGrClDett = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.GRUPPI_CLASSIFICAZIONI_DETTAGLIO);
	if(fsGrClDett.find())
	{
		fsGrClDett.idgruppoclassificazione = idGruppoClassificazione;
		if(fsGrClDett.search())
		{
			/** @type {Array<Number>}*/
			var arrGrClDett = globals.foundsetToArray(fsGrClDett,'idgruppoclassificazionedettaglio')
			return arrGrClDett;
		}
	}
	
	return null;
}

/**
 * Restituisce il numero (indice) della prima settimana presente nel periodo richiesto
 * 
 * @param {Number} _anno
 * @param {Number} _mese
 * 
 * @return Number
 *  
 * @properties={typeid:24,uuid:"14BA9A7E-8816-479F-BF63-8F4CE2ECE264"}
 */
function getPrimaSettimanaPeriodo(_anno,_mese)
{
	// determina la prima settimana per il periodo scelto (serve per compilare la valuelist delle settimane selezionabili)
	var primoGiornoPeriodo = new Date(_anno, _mese - 1,1);
	var primaSettimana = globals.getWeekNumber(primoGiornoPeriodo);
	var primaSettimanaCalc = primaSettimana;
	if(primaSettimana == 53 || primaSettimana == 52)
		primaSettimanaCalc = 0;
		
	return primaSettimanaCalc;
}

/**
 * Restituisce la data relativa al giorno di Natale
 * 
 * @param {Number} anno
 * 
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"4AD9B57E-DAD5-44B9-BB35-E457A35E7381"}
 */
function getChristmas(anno)
{
	return new Date(anno,11,25);
}

/**
 * Restituisce la data relativa al giorno di Santo Stefano
 * 
 * @param {Number} anno
 * 
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"B13FD774-7FD2-4E0C-8201-1228C305100E"}
 */
function getBoxingDay(anno)
{
	return new Date(anno,11,26);
}

/**
 * Restituisce la data relativa al giorno di Pasqua
 * 
 * @param {Number} anno
 * 
 * @return {Date}
 *
 * @properties={typeid:24,uuid:"D629B737-2B92-4901-9BC0-E81459EFC0CB"}
 */
function getEaster(anno)
{
	return new Date(2017,3,16);
}

/**
 * Restituisce la data relativa al giorno di pasquetta
 * 
 * @param {Number} anno
 * 
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"58A3D483-1F66-456C-852A-DD3E36A07A44"}
 */
function getEasterMonday(anno)
{
	var easter = getEaster(anno);
	return new Date(anno,easter.getMonth(),easter.getDate() + 1);
}

/**
 * Restituisce la data relativa al primo girono dell'anno
 * 
 * @param {Number} anno
 * 
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"153F96C2-B876-485C-B126-CF4E9B7D9C0B"}
 */
function getFirstYearDay(anno)
{
	return new Date(anno,0,1);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} userId
 * 
 * @return {JSDataSet}
 *  
 * @properties={typeid:24,uuid:"98E95DBC-5821-4F8E-970F-9C26D72C9BD4"}
 */
function getUserGroups(userId)
{
	var sqlUG = "SELECT group_id from sec_group \
               WHERE group_id IN \
               ( \
           	   SELECT group_id FROM sec_user_in_group WHERE user_org_id IN \
	                 ( \
 		               SELECT user_org_id \
      		           FROM sec_user_org \
		               WHERE user_id = ? \
	                 ) \
               )"
	var arrUG = [userId];
	
	var dsUG = databaseManager.getDataSetByQuery(globals.Server.SVY_FRAMEWORK,sqlUG,arrUG,-1);
	
	return dsUG;
}

/**
 * Restituisce il dataset con le organizzazioni di cui l'utente fa parte
 * 
 * @param {Number} userId
 *
 * @return {JSDataSet}
 * @properties={typeid:24,uuid:"10E2772D-D564-441A-9D19-E4479B318118"}
 */
function getUserOrganizations(userId)
{
	var sqlUO = "SELECT user_org_id \
 	              FROM sec_user_org \
	              WHERE user_id = ? \
                 ";
	var arrUO = [userId];
	
	var dsUO = databaseManager.getDataSetByQuery(globals.Server.SVY_FRAMEWORK,sqlUO,arrUO,-1);
	
	return dsUO;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il nome della sede di lavoro
 *  
 * @param {Number} idDittaSede
 *
 * @properties={typeid:24,uuid:"BA987039-5CE7-4636-AB86-B922C899602A"}
 */
function getNomeSedeDiLavoro(idDittaSede)
{
	/** @type{JSFoundset<db:/ma_anagrafiche/ditte_sedi>}*/
	var fsSedi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_SEDI);
	if(fsSedi.find())
	{
		fsSedi.iddittasede = idDittaSede;
		if(fsSedi.search())
			return fsSedi.descrizione;
	}
	
	return null;
}

/**
 * Restituisce il valore impostato per la ditta ed il tipo di parametro selezionato
 * 
 * @param {Number} idDitta
 * @param {String} parameterType
 *
 * @properties={typeid:24,uuid:"A9DF0CD3-A2E5-4B19-BF92-0D6B3BAFA2DE"}
 * @AllowToRunInFind
 */
function getParameterValue(idDitta,parameterType)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_giustificativiparametri>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_GIUSTIFICATIVI_PARAMETRI);
    if(fs.find())
    {
    	fs.idditta = idDitta;
    	fs.idtabgiustificativoparametro = getIdTabGiustificativoParametroFromCodice(parameterType); 
    	if(fs.search())
    	   return fs.valore;
    	else
    	{
    		/** @type {JSFoundset<db:/ma_common/tab_giustificativiparametrivalori>}*/
    		var fsVal = databaseManager.getFoundSet(globals.Server.MA_COMMON,'tab_giustificativiparametrivalori');
    		if(fsVal.find())
    		{
    			fsVal.idtabgiustificativoparametro = getIdTabGiustificativoParametroFromCodice(parameterType);
    			fsVal.defaultvalue = 1;
    			if(fsVal.search())
    				return fsVal.codice;
    		}
    	}
    }
    return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo del parametro giustificativo avente il codice richiesto
 * 
 * @param {String} codParameter
 *
 * @properties={typeid:24,uuid:"7601546E-0B3E-4619-A1D8-62972861CF0B"}
 */
function getIdTabGiustificativoParametroFromCodice(codParameter)
{
	/** @type {JSFoundset<db:/ma_common/tab_giustificativiparametri>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_COMMON,'tab_giustificativiparametri');
	if(fs.find())
	{
		fs.codice = codParameter;
		if(fs.search())
			return fs.idtabgiustificativoparametro;
	}
	
	return null;
}

/**
 * @param {Number} idTabGiustificativoParam
 *
 * @properties={typeid:24,uuid:"91A95D4E-2E3C-423B-A390-DE3F642113CF"}
 * @AllowToRunInFind
 */
function getCodiceParametro(idTabGiustificativoParam)
{
	/** @type {JSFoundset<db:/ma_common/tab_giustificativiparametri>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_COMMON,globals.Table.TAB_GIUSTIFICATIVI_PARAMETRI);
    if(fs.find())
    {
    	fs.idtabgiustificativoparametro = idTabGiustificativoParam;
    	if(fs.search())
    		return fs.codice;
    }
    
    return null;
}
/**
 * @param {Number} idTabGiustificativoParam
 *
 * @properties={typeid:24,uuid:"CF284FF2-E481-47F4-91AA-B312D720FD35"}
 * @AllowToRunInFind
 */
function getDescrizioneParametro(idTabGiustificativoParam)
{
	/** @type {JSFoundset<db:/ma_common/tab_giustificativiparametri>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_COMMON,globals.Table.TAB_GIUSTIFICATIVI_PARAMETRI);
    if(fs.find())
    {
    	fs.idtabgiustificativoparametro = idTabGiustificativoParam;
    	if(fs.search())
    		return fs.descrizione;
    }
    
    return null;
}
/**
 * @param {Number} idTabGiustificativoValoreParam
 *
 * @properties={typeid:24,uuid:"F61432D0-9A49-46D0-B530-999E528280C3"}
 * @AllowToRunInFind
 */
function getCodiceParametroValore(idTabGiustificativoValoreParam)
{
	/** @type {JSFoundset<db:/ma_common/tab_giustificativiparametrivalori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_COMMON,globals.Table.TAB_GIUSTIFICATIVI_VALORI);
    if(fs.find())
    {
    	fs.idtabgiustificativoparametrovalore = idTabGiustificativoValoreParam;
    	if(fs.search())
    		return fs.codice;
    }
    
    return null;
}
/**
 * @param {Number} idTabGiustificativoValoreParam
 *
 * @properties={typeid:24,uuid:"6D12CC4B-5E28-4067-8701-A09BC00E24CE"}
 * @AllowToRunInFind
 */
function getDescrizioneParametroValore(idTabGiustificativoValoreParam)
{
	/** @type {JSFoundset<db:/ma_common/tab_giustificativiparametrivalori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_COMMON,globals.Table.TAB_GIUSTIFICATIVI_VALORI);
    if(fs.find())
    {
    	fs.idtabgiustificativoparametrovalore = idTabGiustificativoValoreParam;
    	if(fs.search())
    		return fs.descrizione;
    }
    
    return null;
}

/**
 * Ritorna 1 se la ditta utilizza le timbrature, 0 altrimenti
 * 
 * @param {Number} idditta
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"24DD1DFA-B6B1-4B85-BB2A-6676741A5B52"}
 * @AllowToRunInFind
 */
function haOrologio(idditta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_presenze>}*/
	var fsOrologio = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_PRESENZE); 
	if(fsOrologio.find())
	{
		fsOrologio.idditta = idditta;
		fsOrologio.search();
		if(fsOrologio.timbrature_gestioneorologio)
			return 1;
	}
	
	return 0;
}

/**
 * Ritorna 1 se la ditta utilizza la gestione turni, 0 altrimenti
 * 
 * @param {Number} idditta
 *
 * @properties={typeid:24,uuid:"4A555B80-40DE-413C-8FA4-578752700034"}
 * @AllowToRunInFind
 */
function haGestioneTurno(idditta)
{
	var arrTurno = [];
	
	// nel caso di gerarchia nelle autorizzazioni il valore della ditta è -1 poichè si basa tutto sugli accessi
	// dobbiamo verificare se qualcuna delle ditte ha la gestione turni 
	if(idditta == -1)
	{
		arrTurno = getDitteStandard();
		//TODO possono esistere ditte esterne con gestione turni?!?
	}
	else
		arrTurno = [idditta];
	
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_presenze>} */
	var fsPresenze = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_PRESENZE);
	if(fsPresenze.find())
	{
		fsPresenze.idditta = arrTurno;
		var numDitte = fsPresenze.search(); 
		for(var i=1; i<=numDitte; i++)
		{
			if(fsPresenze.getRecord(i).ore_gestioneturno)
				return true;
		}
	}
	
	return false;
}

/**
 * Restituisce l'ultimo periodo in cui si è effettuata la predisposizione per l'invio
 * 
 * @param {Number} idLavoratore
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"092A0405-0FB6-479C-8BAD-FE0C21F6DEF5"}
 */
function getUltimoPeriodoPredisposto(idLavoratore)
{
	var sqlUP = "SELECT Periodo FROM E2Wk_AttivitaEseguiteDip WHERE idDip = ? AND idTabAttivita = 3 ORDER BY Periodo DESC";
    var arrUP = [idLavoratore];
    var dsUP = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlUP,arrUP,-1);
    return dsUP.getValue(1,1);
}

/**
 * Restituisce il gruppo di installazione relativo all' id della ditta indicata
 * 
 * @param {Number} idDitta
 *
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"BF3E3E75-219C-4EC3-A7DD-3B86D0A50ADF"}
 * @AllowToRunInFind
 */
function getGruppoInstallazioneDitta(idDitta)
{
	var idGruppoInstallazione = null;
	
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
	if (fs.find())
	{
		fs.idditta = idDitta;
		if(fs.search())
		{
			if(fs.tipologia == 1)
				idGruppoInstallazione = fs['ditte_to_ditte_legami']['ditte_legami_to_ditte_sedi']['ditte_sedi_to_ditte_sedigruppiinst'].idgruppoinst;
			else if(fs['ditte_to_ditte_sedi_sedeoperativa']['ditte_sedi_to_ditte_sedigruppiinst'])				
                idGruppoInstallazione = fs['ditte_to_ditte_sedi_sedeoperativa']['ditte_sedi_to_ditte_sedigruppiinst'].idgruppoinst;
			
			if(!idGruppoInstallazione)
			    globals.ma_utl_showWarningDialog('Nessun gruppo di installazione trovato per la ditta : ' + globals.getCodDitta(idDitta) + ' - ' + globals.getRagioneSociale(idDitta));
			
		}
		else                          
              globals.ma_utl_showWarningDialog('nessuna ditta trovata con id : ' + idDitta);
	
		return idGruppoInstallazione;
	}
	else
		throw new Error('i18n:ma.err.findmode', [this.name]);
}

/**
 * Restituisce il gruppo di installazione relativo all' id del lavoratore indicato
 * 
 * @param {Number} idLavoratore
 *
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"87F78966-8A1B-464E-BB4C-0CE0E24A97E0"}
 * @AllowToRunInFind
 */
function getGruppoInstallazioneLavoratore(idLavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fs.find())
	{
		fs.idlavoratore = idLavoratore;
		if(fs.search())
			return fs.lavoratori_to_ditte.tipologia == globals.Tipologia.ESTERNA ?
					                                   fs.lavoratori_to_ditte['ditte_to_ditte_legami']['ditte_legami_to_ditte_sedi'].ditte_sedi_to_ditte_sedigruppiinst.idgruppoinst :
                                                       fs.lavoratori_to_ditte['ditte_to_ditte_sedi_sedeoperativa']['ditte_sedi_to_ditte_sedigruppiinst'].idgruppoinst;
	}
	return null;
}

/**
 * Restituisce l'array con gli id delle ditte di tipologia standard 
 * 
 * @return {Array}
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"46B3ABF1-A4B2-421B-8250-2124023E3825"}
 */
function getDitteStandard()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = globals.Tipologia.STANDARD;
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B3E79F34-781D-432D-B930-382ACC8DDFE7"}
 */
function getDitteControllate()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = [globals.Tipologia.STANDARD,globals.Tipologia.ESTERNA,globals.Tipologia.GESTITA_UTENTE];
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B96C1E44-1134-4412-8106-CAAB9CBD16C8"}
 */
function getDitteControllateNonEsterne()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = [globals.Tipologia.STANDARD,globals.Tipologia.GESTITA_UTENTE];
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6C2AB8B5-A552-49BB-AFA0-6F9FCDCB64AB"}
 */
function getDitteControllateNonGestiteStudio()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = [globals.Tipologia.ESTERNA,globals.Tipologia.GESTITA_UTENTE];
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * Restituisce l'array con gli id delle ditte di tipologia esterna 
 * 
 * @return {Array}
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B05C9C7F-7328-4113-861A-970CB007FCEB"}
 */
function getDitteEsterne()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = globals.Tipologia.ESTERNA;
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * Restituisce l'array con gli id delle ditte di tipologia esterna interinale
 *
 * @return {Array}
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"ED972845-F4C6-4B71-BEA2-F5AFE99DBB1B"}
 */
function getDitteInterinali()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = globals.Tipologia.ESTERNA;
    	fsDitte.ditte_to_ditte_legami.tipoesterni = 0;
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * Restituisce l'array con gli id delle ditte di tipologia fornitori 
 * 
 * @return {Array}
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"44FA75D7-6814-4EEA-A063-95E6F56C2C37"}
 */
function getDitteFornitori()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = globals.Tipologia.FORNITORE;
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * Restituisce l'array con gli id delle ditte di tipologia clienti 
 * 
 * @return {Array}
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8F1BDCA8-CC0D-43D2-926A-955106B2B3E5"}
 */
function getDitteClienti()
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fsDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitte.find())
    {
    	fsDitte.tipologia = globals.Tipologia.CLIENTE;
    	if(fsDitte.search())
    		return globals.foundsetToArray(fsDitte,'idditta');
    }
    
    return [];
}

/**
 * @AllowToRunInFind
 * 
 * Ritorna l'array con gli indici ai quali corrisponde il codice di categoria passato
 * 
 * @param {String} codCateg
 * 
 * @return {Array<Number>}
 * 
 * @properties={typeid:24,uuid:"6285D94B-FDF2-4737-ACD2-D3DB8DF03E49"}
 */
function getIdTabSwFromCodice(codCateg)
{
	/** @type {Array<Number>} */
	var arrIdTabSw = [];
	
	/** @type {JSFoundset<db:/ma_anagrafiche/tab_sw>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,'tab_sw');
	if(fs.find())
	{
		fs.codcategoriasw = codCateg;
		var numId = fs.search();
		if(numId)
			arrIdTabSw = globals.foundsetToArray(fs,'idtabsw')
					
	}
	
	return arrIdTabSw;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'ultimo codice turnista
 * 
 * @param {Number} idLav
 * 
 * @return String
 * 
 * @properties={typeid:24,uuid:"D9E5E41E-B56F-4DE4-8BBD-8566CD5D496E"}
 */
function getCodiceTurnista(idLav)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2dcg_decorrenza>}*/
	var fsDec = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.LAVORATORI_DECORRENZE);
	if(fsDec.find())
	{
		fsDec.iddcg_campi = 23;
		fsDec.id_legato = idLav;
		if(fsDec.search())
		{			
			fsDec.sort('decorrenza desc');
			return fsDec.getRecord(1).valore;
		}
	}
	
	return null;
}

/**
 * Recupera le informazioni dell'utente di livello superiore (ad es. il responsabile) 
 * (colonna 3 --> user_id, colonna 5 --> email)
 * 
 * @param {Number} user_org_id
 *
 * @return {JSDataSet}
 *
 * @properties={typeid:24,uuid:"EAC09C61-24DA-4395-B0BF-1AC91215FD0E"}
 */
function getInfoUserLivelloSuperiore(user_org_id)
{
	var sqlMail = "SELECT\
	  su.user_id\
      ,su.user_name\
      ,su.com_email\
      FROM\
	    sec_user_to_lavoratori sutl\
	  INNER JOIN sec_user su\
	  ON su.user_id = sutl.user_id\
	  WHERE\
	     su.user_id IN\
	     (SELECT DISTINCT\
	             suo.user_id\
	      FROM\
	        sec_user_in_group sug\
	      INNER JOIN sec_group sg\
	      ON sug.group_id = sg.group_id\
	      INNER JOIN sec_user_org suo\
	      ON suo.user_org_id = sug.user_org_id\
	      WHERE suo.organization_id\
	      IN\
	        (SELECT parent_organization_id FROM sec_organization_hierarchy soh\
	         WHERE organization_id IN\
	         (SELECT organization_id FROM sec_user_org WHERE user_org_id = ?))\
	     )\
	  ORDER BY\
	     su.user_id"
		
	var dsMail = databaseManager.getDataSetByQuery(globals.Server.SVY_FRAMEWORK,sqlMail,[user_org_id],-1);
	
	return dsMail;
}

/**
 * Recupera le informazioni necessarie all'invio delle mail per tutti gli utenti con un livello
 * gerarchico superiore a quello dell'identificativo utente-organizzazione in questione
 * 
 * @param user_org_id
 *
 * @return {JSDataSet}
 * 
 * @properties={typeid:24,uuid:"EDC966A3-D6A0-4BA2-B458-57148B401538"}
 */
function getInfoUsersLivelliSuperiori(user_org_id)
{
	var organization_id = globals.getOrganizationId(user_org_id);
	if (!organization_id)
	{
		globals.ma_utl_showWarningDialog('Nessuna organizzazione trovata per l\'utente richiesto');
		return null;
	}
	
	var sqlUsers = "WITH RECURSIVE organization_responsibles AS\
                    (\
                     SELECT parent_organization_id, 1 AS depth\
                     FROM sec_organization_hierarchy soh\
                     WHERE organization_id = ?\
                     UNION ALL\
                     SELECT soh.parent_organization_id, depth+1\
                     FROM sec_organization_hierarchy soh\
                     JOIN organization_responsibles ores\
                     ON(soh.organization_id = ores.parent_organization_id)\
                    )\
                    SELECT su.user_id\
                           ,su.user_name\
                           ,su.com_email\
                           ,suo.user_org_id\
                           ,depth\
                           ,ssg.group_id \
                    FROM sec_user su\
                    INNER JOIN sec_user_org suo\
                    ON su.user_id = suo.user_id\
                    INNER JOIN sec_organization so\
                    ON suo.organization_id = so.organization_id\
                    INNER JOIN organization_responsibles ores\
                    ON ores.parent_organization_id = so.organization_id\
                    LEFT OUTER JOIN sec_system_group ssg\
                    ON so.organization_id = ssg.for_organization\
                    ORDER BY depth";
	var dsUsers = databaseManager.getDataSetByQuery(globals.Server.SVY_FRAMEWORK,sqlUsers,[organization_id.toString()],-1);
	
	return dsUsers;
}

/**
 * @properties={typeid:24,uuid:"E46358E7-8825-4409-8A13-DB7193132AD0"}
 */
function getDeltaLivelloAutorizzazione(userOrgId,userId,groupId)
{
	if(globals.ma_utl_hasKey(globals.Key.RICHIESTA_PERMESSI_TUTTI_LIV))
		return 100;
	else if(globals.ma_utl_hasKey(globals.Key.RICHIESTA_PERMESSI_4_LIV))
		return 4;
	else if(globals.ma_utl_hasKey(globals.Key.RICHIESTA_PERMESSI_3_LIV))
		return 3;
	else if(globals.ma_utl_hasKey(globals.Key.RICHIESTA_PERMESSI_2_LIV))
		return 2;
	else
		return 1;
	
//	if(globals.ma_utl_userOrgHasKey(userOrgId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_TUTTI_LIV))
//		|| globals.ma_utl_userIdHasKey(userId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_TUTTI_LIV))
//	    || globals.ma_utl_userGroupHasKey(groupId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_TUTTI_LIV)))
//		return 100;
//	else if(globals.ma_utl_userOrgHasKey(userOrgId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_4_LIV))
//			|| globals.ma_utl_userIdHasKey(userId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_4_LIV))
//			|| globals.ma_utl_userGroupHasKey(groupId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_4_LIV)))
//		return 4;
//	else if(globals.ma_utl_userOrgHasKey(userOrgId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_3_LIV))
//			|| globals.ma_utl_userIdHasKey(userId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_3_LIV))
//			|| globals.ma_utl_userGroupHasKey(groupId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_3_LIV)))
//		return 3;
//	else if(globals.ma_utl_userOrgHasKey(userOrgId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_2_LIV))
//			|| globals.ma_utl_userIdHasKey(userId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_2_LIV))
//			|| globals.ma_utl_userGroupHasKey(groupId,globals.ma_utl_getSecurityKeyId(globals.Key.RICHIESTA_PERMESSI_2_LIV)))
//		return 2; 
//	
//	else return 1; //caso di default
}

/**
 * Ritorna il nome del giorno nel formato per l'indicazione in giornaliera
 * 
 * @param {Date} giorno
 * @type {String}
 * 
 * @properties={typeid:24,uuid:"3F99DDF6-873C-4B1D-BC25-904B8427B572"}
 */
function getNomeGiorno(giorno){

	/** @type {Date} */
	var dgiorno = giorno 
	
    switch (dgiorno.getDay()){
     
        case 0 : return 'DO'
                 break
        case 1 : return 'LU'
                 break
        case 2 : return 'MA'
                 break                      
        case 3 : return 'ME'
                 break
        case 4 : return 'GI'
                 break                      
        case 5 : return 'VE'
                 break                      
        case 6 : return 'SA'
                 break                      
        default : return 'default'
    }
}

/**  
 * Restituisce il nome completo del giorno
 * 
 * @param {Object} giorno
 * 
 * @type {String}
 * 
 * @properties={typeid:24,uuid:"74EEF52D-B50A-4CF5-A974-5FA6987C8A2A"}
 */
function getNomeInteroGiorno(giorno){

	/** @type {Date} */
	var dgiorno = giorno 
	
    switch (dgiorno.getDay()){
     
        case 0 : return 'Domenica'
                 break
        case 1 : return 'Lunedì'
                 break
        case 2 : return 'Martedì'
                 break                      
        case 3 : return 'Mercoledì'
                 break
        case 4 : return 'Giovedì'
                 break                      
        case 5 : return 'Venerdì'
                 break                      
        case 6 : return 'Sabato'
                 break                      
        default : return 'default'
    }
}

/**
 * @param {Number} numMese
 * @type {String}
 * @properties={typeid:24,uuid:"1F0B1B0E-AD06-4147-8578-79E8A4C21C83"}
 */
function getNomeMese(numMese){
	
	switch (numMese){
		
		case 1 : 
			return 'Gennaio'
		case 2:
			return 'Febbraio'
		case 3:
			return 'Marzo'
		case 4:
		    return 'Aprile'
		case 5:
		    return 'Maggio'
		case 6:
		    return 'Giugno'
		case 7:
	 	    return 'Luglio'
		case 8:
			return 'Agosto'
		case 9:
		    return 'Settembre'
		case 10:
		    return 'Ottobre'
		case 11:
		    return 'Novembre'
		case 12:
		    return 'Dicembre'
	    default:
	    	return null
	    	break
	}
}

/**
 * Restituisce la descrizione dell'evento passato come parametro
 * 
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"BBACA588-267B-4D28-9B58-6C66858B1C77"}
 * @AllowToRunInFind
 */
function getDescrizioneEvento(idEvento)
{
	/** @type {JSFoundset<db:/ma_presenze/e2eventi>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI);
    if(fs.find())
    {
    	fs.idevento = idEvento;
    	if(fs.search())
    		return fs.descriz;
    }
	
    return null;
}

/**
 * Restituisce l'idlavoratore del lavoratore di Epi2 associato all'user_id dell'utente Servoy
 * (sec_user_to_lavoratori_to_sec_user)
 * 
 * @param {Number} userid
 * @param {String} owner
 *
 * @properties={typeid:24,uuid:"302916F0-E3B1-4B30-89C4-DE9B0AA60371"}
 * @AllowToRunInFind
 */
function getIdLavoratoreFromUserId(userid,owner)
{
	/** @type {JSFoundset<db:/svy_framework/sec_user_to_lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.SVY_FRAMEWORK,'sec_user_to_lavoratori');
	if(fs.find())
	{
		fs.user_id = userid;
		fs.owner_id = owner;
		if(fs.search())
			return fs.idlavoratore;
		
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce la data di assunzione del lavoratore
 * 
 * @param {Number} idLavoratore
 *
 * @properties={typeid:24,uuid:"B1AE9F42-EA14-470A-883D-75CD7BBFC0E2"}
 */
function getDataAssunzione(idLavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find())
    {
    	fs.idlavoratore = idLavoratore;
    	fs.search();
    	return fs.assunzione;
    }
    return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce la data di cessazione del lavoratore
 * 
 * @param {Number} idLavoratore
 *
 * @properties={typeid:24,uuid:"A17F42F6-DEDC-4E8A-A13C-B089DA108774"}
 */
function getDataCessazione(idLavoratore)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
    if(fs.find())
    {
    	fs.idlavoratore = idLavoratore;
    	fs.search();
    	return fs.cessazione;
    }
    return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il foundset degli eventi abilitati per la specifica categoria software
 *
 * @param {Number} idDitta
 * @param {Number} idTabCategoriaSw
 * 
 * @return {JSFoundSet<db:/ma_presenze/e2eventiabilitazioni>}
 * 
 * @properties={typeid:24,uuid:"A8F563F7-A63E-4EA5-9340-575F85CD78A7"}
 */
function getEventiAbilitati(idDitta,idTabCategoriaSw)
{
	/** @type {JSFoundset<db:/ma_presenze/e2eventiabilitazioni>}*/
	var fsEvAbil = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI_ABILITAZIONI);
	
	fsEvAbil.find();
	fsEvAbil.idditta = idDitta;
	fsEvAbil.idtabcategoriasw = idTabCategoriaSw;
	
	if(fsEvAbil.search())
		return fsEvAbil;
	
	return null;
}

/**
 * @param {Number} idLav
 * @param {Date} giornoDal
 * @param {Date} giornoAl
 * 
 * @return {JSFoundSet<db:/ma_presenze/e2giornalieraprogfasce>}
 * 
 * @properties={typeid:24,uuid:"971D9A52-824D-44CF-90BE-70F924562AB1"}
 * @AllowToRunInFind
 */
function getProgrammazioneFasceDalAl(idLav,giornoDal,giornoAl)
{
	/** @type {JSFoundset<db:/ma_presenze/e2giornalieraprogfasce>} */
	var fsFasceProg = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA_PROGFASCE);
	if(fsFasceProg.find())
	{
		fsFasceProg.iddip = idLav;
		if(giornoDal && giornoAl)
		   fsFasceProg.giorno = globals.dateFormat(giornoDal,globals.ISO_DATEFORMAT) + '...' + globals.dateFormat(giornoAl,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		else if(giornoDal)
			fsFasceProg.giorno = '>=' + globals.dateFormat(giornoDal,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		else
			fsFasceProg.giorno = '<=' + globals.dateFormat(giornoAl,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		
		if(fsFasceProg.search())
			return fsFasceProg;
	}
	
	return null;
}

/**
 * Rende timbrature precedentemente assegnate nuovamente disponibili per l'assegnazione
 * nella successiva acquisizione
 * 
 * @param {Number} iddip
 * @param {Date} dal
 * @param {Date} [al]
 *
 * @properties={typeid:24,uuid:"198A3D62-60CD-4471-8598-0192D2B57E44"}
 * @AllowToRunInFind
 */
function rendiTimbratureRiassegnabili(iddip,dal,al)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2timbratura>}*/
	var fsTimb = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.TIMBRATURE);
	if(fsTimb.find())
	{
		if(al == null)
			al = globals.TODAY;
		dal = new Date(dal.getFullYear(),dal.getMonth(),dal.getDate() + 1);
		
		fsTimb.iddip = iddip;
		fsTimb.timbratura = (dal.getFullYear() * 100000000 + (dal.getMonth() + 1) * 1000000 + dal.getDate() * 10000) 
		                  + '...' + (al.getFullYear() * 100000000 + (al.getMonth() + 1) * 1000000 + al.getDate() * 10000 + 2359);
	
		if(fsTimb.search())
		{
			var fsTimbUpdater = databaseManager.getFoundSetUpdater(fsTimb);
			fsTimbUpdater.setColumn('iddip',0);
			fsTimbUpdater.performUpdate();
		}
	}
}

/**
 * Pulisce i dati relativi agli eventi presenti in giornaliera
 * 
 * @param {Number} iddip
 * @param {Date} dal
 * @param {Date} [al]
 *
 * @properties={typeid:24,uuid:"409D0699-82E4-4CCD-8197-9E7B60AB7635"}
 */
function pulisciGiornaliera(iddip,dal,al)
{
	if(al == null)
		al = getMaxGiornoGiornaliera(iddip);
	
	dal = new Date(dal.getFullYear(),dal.getMonth(),dal.getDate() + 1);
	
	var recsGiorn = globals.getRecsGiornaliera(iddip,dal,al);
	var arrIdGiornaliera = globals.foundsetToArray(recsGiorn,'idgiornaliera');
	
	var sqlPulisciGiorn = "DELETE FROM E2GiornalieraEventi WHERE idgiornaliera IN ("  +
                          arrIdGiornaliera.map(function(id){return id}).join(',') + ")";

    var success = plugins.rawSQL.executeSQL(globals.Server.MA_PRESENZE,
                        globals.Table.GIORNALIERA_EVENTI,
						sqlPulisciGiorn,
						[]);

	if(!success)
	{
		globals.ma_utl_showWarningDialog('Errore durante la cancellazione degli eventi nella tabella e2giornalieraeventi','Pulisci giornaliera eventi');
		application.output(plugins.rawSQL.getException().getMessage(), LOGGINGLEVEL.ERROR);
		return false;
	}
	
	sqlPulisciGiorn = "DELETE FROM E2Giornaliera WHERE idgiornaliera IN ("  +
					   arrIdGiornaliera.map(function(id){return id}).join(',') + ")"; 
	
    success = plugins.rawSQL.executeSQL(globals.Server.MA_PRESENZE,
										globals.Table.GIORNALIERA,
										sqlPulisciGiorn,
										[]);
	
	if(!success)
	{
		globals.ma_utl_showWarningDialog('Errore durante la cancellazione degli eventi nella tabella e2giornaliera','Pulisci giornaliera eventi');
		application.output(plugins.rawSQL.getException().getMessage(), LOGGINGLEVEL.ERROR);
		return false;
	}
	
	plugins.rawSQL.flushAllClientsCache(globals.Server.MA_PRESENZE,
	                    globals.Table.GIORNALIERA_PROGFASCE);
	
	return true;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'ultimo giorno correntemente compilato in giornaliera per il dipendente
 * 
 * @param {Number} idDip
 *
 * @properties={typeid:24,uuid:"9C372ECA-F68B-4E7B-AC07-8AE8458BEB5C"}
 */
function getMaxGiornoGiornaliera(idDip)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2giornaliera>} */
	var fsGiorn = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA);
	if(fsGiorn.find())
	{
		fsGiorn.iddip = idDip;
		if(fsGiorn.search())
		{
			fsGiorn.sort('giorno desc');
			return fsGiorn.giorno;
		}
	}
	
	return null;
}