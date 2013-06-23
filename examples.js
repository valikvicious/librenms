$(function(){

	// Example #1
	$(".maparea1").mapael({
		map : {
			name : "france_departments",
			width:280,
			height:300
		}
	});
	
	// Example #2
	$(".maparea2").mapael({
		map : {
			name : "france_departments",
			width:1000,
			height:1200
		},
		areas: {
			"56" : {
				text : "56", 
				tooltip: {content : "Morbihan (56)"}
			}
		},
		plots : [
			{
				latitude : 48.86, 
				longitude: 2.3444
			},
			{
				type: "circle",
				size:50,
				latitude :45.758888888889, 
				longitude: 4.8413888888889, 
				value : 700000, 
				attrs : {href : "#"}, 
				tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Lyon"},
				text : "Lyon"
			},
			{
				type :"square",
				size :20,
				latitude : 48.114166666667, 
				longitude: -1.6808333333333, 
				tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Rennes"},
				text : "Rennes",
				attrs : {href : "#"}
			}
		]
	});
	
	// Example #3
	$(".maparea3").mapael({
		map : {
			name : "france_departments", 
			defaultArea: {
				attrs : {
					fill: "#5ba4ff",
					stroke: "#99c7ff",
					cursor: "pointer"
				},
				textAttrs : {
					cursor: "pointer",
					fill :"#000"
				},
				onclick: function(params, mapElem, textElem) {
					mapElem.attr({fill: '#ff0000'});
				}
			}
		},
		areas: {
			"29" : {
				text : "29", 
				attrs : {
					fill :"#0088db"
				},
				tooltip: {content : "Finistère (29)"},
				onclick: function(params, mapElem, textElem) {
					mapElem.attr({fill: '#24ff00'});
				}
			}
		}
	});	
	
	// Example #4
	$(".maparea4").mapael({
		map : {
			name : "france_departments",
			defaultArea: {
				attrs : {
					stroke : "#fff", 
					"stroke-width" : 1
				},
				attrsHover : {
					"stroke-width" : 2, 
					transform : "s1.5"
				}
			}
		},
		legend : {
			area : {
				display : true,
				title :"Population of France by department", 
				slices : [
					{
						max :300000, 
						attrs : {
							fill : "#97e766"
						},
						label :"Less than de 300 000 inhabitants"
					},
					{
						min :300000, 
						max :500000, 
						attrs : {
							fill : "#7fd34d"
						},
						label :"Between 100 000 and 500 000 inhabitants"
					},
					{
						min :500000, 
						max :1000000, 
						attrs : {
							fill : "#5faa32"
						},
						label :"Between 500 000 and 1 000 000 inhabitants"
					},
					{
						min :1000000, 
						attrs : {
							fill : "#3f7d1a"
						},
						label :"More than 1 million inhabitants"
					}
				]
			}
		},
		areas: {
			"59": {
				value: "2617939",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nord (59)</span><br />Population : 2617939"}
			},
			"75": {
				value: "2268265",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Paris (75)</span><br />Population : 2268265"}
			},
			"13": {
				value: "2000550",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bouches-du-Rhône (13)</span><br />Population : 2000550"}
			},
			"69": {
				value: "1756069",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rhône (69)</span><br />Population : 1756069"}
			},
			"92": {
				value: "1590749",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hauts-de-Seine (92)</span><br />Population : 1590749"}
			},
			"93": {
				value: "1534895",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Seine-Saint-Denis (93)</span><br />Population : 1534895"}
			},
			"62": {
				value: "1489209",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pas-de-Calais (62)</span><br />Population : 1489209"}
			},
			"33": {
				value: "1479277",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gironde (33)</span><br />Population : 1479277"}
			},
			"78": {
				value: "1435448",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Yvelines (78)</span><br />Population : 1435448"}
			},
			"77": {
				value: "1347008",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Seine-et-Marne (77)</span><br />Population : 1347008"}
			},
			"94": {
				value: "1340868",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Val-de-Marne (94)</span><br />Population : 1340868"}
			},
			"44": {
				value: "1317685",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Loire-Atlantique (44)</span><br />Population : 1317685"}
			},
			"76": {
				value: "1275952",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Seine-Maritime (76)</span><br />Population : 1275952"}
			},
			"31": {
				value: "1268370",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Garonne (31)</span><br />Population : 1268370"}
			},
			"38": {
				value: "1233759",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Isère (38)</span><br />Population : 1233759"}
			},
			"91": {
				value: "1233645",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Essonne (91)</span><br />Population : 1233645"}
			},
			"95": {
				value: "1187836",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Val-d'Oise (95)</span><br />Population : 1187836"}
			},
			"67": {
				value: "1115226",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bas-Rhin (67)</span><br />Population : 1115226"}
			},
			"06": {
				value: "1094579",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Alpes-Maritimes (06)</span><br />Population : 1094579"}
			},
			"57": {
				value: "1066667",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Moselle (57)</span><br />Population : 1066667"}
			},
			"34": {
				value: "1062617",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hérault (34)</span><br />Population : 1062617"}
			},
			"83": {
				value: "1026222",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Var (83)</span><br />Population : 1026222"}
			},
			"35": {
				value: "1015470",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ille-et-Vilaine (35)</span><br />Population : 1015470"}
			},
			"29": {
				value: "929286",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Finistère (29)</span><br />Population : 929286"}
			},
			"974": {
				value: "829903",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Réunion (974)</span><br />Population : 829903"}
			},
			"60": {
				value: "823668",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Oise (60)</span><br />Population : 823668"}
			},
			"49": {
				value: "808298",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maine-et-Loire (49)</span><br />Population : 808298"}
			},
			"42": {
				value: "766729",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Loire (42)</span><br />Population : 766729"}
			},
			"68": {
				value: "765634",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haut-Rhin (68)</span><br />Population : 765634"}
			},
			"74": {
				value: "760979",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Savoie (74)</span><br />Population : 760979"}
			},
			"54": {
				value: "746502",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Meurthe-et-Moselle (54)</span><br />Population : 746502"}
			},
			"56": {
				value: "744663",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Morbihan (56)</span><br />Population : 744663"}
			},
			"30": {
				value: "726285",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gard (30)</span><br />Population : 726285"}
			},
			"14": {
				value: "699561",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Calvados (14)</span><br />Population : 699561"}
			},
			"45": {
				value: "674913",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Loiret (45)</span><br />Population : 674913"}
			},
			"64": {
				value: "674908",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pyrénées-Atlantiques (64)</span><br />Population : 674908"}
			},
			"85": {
				value: "654096",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vendée (85)</span><br />Population : 654096"}
			},
			"63": {
				value: "649643",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Puy-de-Dôme (63)</span><br />Population : 649643"}
			},
			"17": {
				value: "640803",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Charente-Maritime (17)</span><br />Population : 640803"}
			},
			"01": {
				value: "614331",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ain (01)</span><br />Population : 614331"}
			},
			"22": {
				value: "612383",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Côtes-d'Armor (22)</span><br />Population : 612383"}
			},
			"37": {
				value: "605819",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Indre-et-Loire (37)</span><br />Population : 605819"}
			},
			"27": {
				value: "603194",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Eure (27)</span><br />Population : 603194"}
			},
			"80": {
				value: "583388",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Somme (80)</span><br />Population : 583388"}
			},
			"51": {
				value: "579533",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marne (51)</span><br />Population : 579533"}
			},
			"72": {
				value: "579497",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sarthe (72)</span><br />Population : 579497"}
			},
			"71": {
				value: "574874",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saône-et-Loire (71)</span><br />Population : 574874"}
			},
			"84": {
				value: "555240",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vaucluse (84)</span><br />Population : 555240"}
			},
			"02": {
				value: "555094",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aisne (02)</span><br />Population : 555094"}
			},
			"25": {
				value: "542509",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Doubs (25)</span><br />Population : 542509"}
			},
			"21": {
				value: "538505",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Côte-d'Or (21)</span><br />Population : 538505"}
			},
			"50": {
				value: "517121",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Manche (50)</span><br />Population : 517121"}
			},
			"26": {
				value: "499313",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Drôme (26)</span><br />Population : 499313"}
			},
			"66": {
				value: "457238",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pyrénées-Orientales (66)</span><br />Population : 457238"}
			},
			"28": {
				value: "440291",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Eure-et-Loir (28)</span><br />Population : 440291"}
			},
			"86": {
				value: "438566",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vienne (86)</span><br />Population : 438566"}
			},
			"73": {
				value: "428751",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Savoie (73)</span><br />Population : 428751"}
			},
			"24": {
				value: "426607",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dordogne (24)</span><br />Population : 426607"}
			},
			"971": {
				value: "409905",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guadeloupe (971)</span><br />Population : 409905"}
			},
			"972": {
				value: "400535",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Martinique (972)</span><br />Population : 400535"}
			},
			"40": {
				value: "397766",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Landes (40)</span><br />Population : 397766"}
			},
			"88": {
				value: "392846",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vosges (88)</span><br />Population : 392846"}
			},
			"81": {
				value: "387099",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tarn (81)</span><br />Population : 387099"}
			},
			"87": {
				value: "384781",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Vienne (87)</span><br />Population : 384781"}
			},
			"79": {
				value: "380569",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Deux-Sèvres (79)</span><br />Population : 380569"}
			},
			"11": {
				value: "365854",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aude (11)</span><br />Population : 365854"}
			},
			"16": {
				value: "364429",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Charente (16)</span><br />Population : 364429"}
			},
			"89": {
				value: "353366",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Yonne (89)</span><br />Population : 353366"}
			},
			"03": {
				value: "353124",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Allier (03)</span><br />Population : 353124"}
			},
			"47": {
				value: "342500",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lot-et-Garonne (47)</span><br />Population : 342500"}
			},
			"41": {
				value: "340729",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Loir-et-Cher (41)</span><br />Population : 340729"}
			},
			"07": {
				value: "324885",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ardèche (07)</span><br />Population : 324885"}
			},
			"18": {
				value: "319600",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cher (18)</span><br />Population : 319600"}
			},
			"53": {
				value: "317006",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mayenne (53)</span><br />Population : 317006"}
			},
			"10": {
				value: "311720",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aube (10)</span><br />Population : 311720"}
			},
			"61": {
				value: "301421",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Orne (61)</span><br />Population : 301421"}
			},
			"08": {
				value: "291678",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ardennes (08)</span><br />Population : 291678"}
			},
			"12": {
				value: "288364",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aveyron (12)</span><br />Population : 288364"}
			},
			"39": {
				value: "271973",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Jura (39)</span><br />Population : 271973"}
			},
			"19": {
				value: "252235",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Corrèze (19)</span><br />Population : 252235"}
			},
			"82": {
				value: "248227",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tarn-et-Garonne (82)</span><br />Population : 248227"}
			},
			"70": {
				value: "247311",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Saône (70)</span><br />Population : 247311"}
			},
			"36": {
				value: "238261",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Indre (36)</span><br />Population : 238261"}
			},
			"65": {
				value: "237945",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hautes-Pyrénées (65)</span><br />Population : 237945"}
			},
			"43": {
				value: "231877",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Loire (43)</span><br />Population : 231877"}
			},
			"973": {
				value: "231167",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guyane (973)</span><br />Population : 231167"}
			},
			"58": {
				value: "226997",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nièvre (58)</span><br />Population : 226997"}
			},
			"55": {
				value: "200509",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Meuse (55)</span><br />Population : 200509"}
			},
			"32": {
				value: "195489",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gers (32)</span><br />Population : 195489"}
			},
			"52": {
				value: "191004",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Marne (52)</span><br />Population : 191004"}
			},
			"46": {
				value: "181232",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lot (46)</span><br />Population : 181232"}
			},
			"2B": {
				value: "168869",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Corse (2B)</span><br />Population : 168869"}
			},
			"04": {
				value: "165155",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Alpes-de-Haute-Provence (04)</span><br />Population : 165155"}
			},
			"09": {
				value: "157582",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ariège (09)</span><br />Population : 157582"}
			},
			"15": {
				value: "154135",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cantal (15)</span><br />Population : 154135"}
			},
			"90": {
				value: "146475",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Territoire de Belfort (90)</span><br />Population : 146475"}
			},
			"2A": {
				value: "145998",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Corse-du-Sud (2A)</span><br />Population : 145998"}
			},
			"05": {
				value: "142312",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hautes-Alpes (05)</span><br />Population : 142312"}
			},
			"23": {
				value: "127919",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Creuse (23)</span><br />Population : 127919"}
			},
			"48": {
				value: "81281",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lozère (48)</span><br />Population : 81281"}
			}
		}
	});	
	
	// Example #5
	$(".maparea5").mapael({
		map : {
			name : "france_departments",
			defaultPlot: {
				size: 10
			},
			defaultArea : {
				attrsHover: {
					fill: "#343434"
					, stroke: "#5d5d5d"
					, "stroke-width": 1
					, "stroke-linejoin": "round"
				}
			}
		},
		legend : {
			plot :{
				display : true,
				cssClass: 'cityFrance'
				, labelAttrs: {
					fill: "#fff"
				}
				, titleAttrs: {
					fill: "#fff"
				}
				, marginBottom: 20
				, marginLeft : 30
				, title: "Population of France by city"
				, slices : [
					{
						size: 4,
						type :"circle",
						max :20000, 
						attrs : {
							fill : "#89ff72"
						},
						label :"Less than 20000 inhabitants"
					},
					{
						size: 6,
						type :"circle",
						min :20000, 
						max :100000, 
						attrs : {
							fill : "#fffd72"
						},
						label :"Between 20000 and 100000 inhabitants"
					},
					{
						size: 20,
						type :"circle",
						min :100000, 
						max :200000, 
						attrs : {
							fill : "#ffbd54"
						},
						label :"Between 100000 et  200000 inhabitants"
					},
					{
						size: 40,
						type :"circle",
						min :200000, 
						attrs : {
							fill : "#ff5454"
						},
						label :"More than 200000 inhabitants"
					}
				]
			}
		},
		plots: [


			{
				value: "2268265",
				latitude: 48.86,
				longitude: 2.3444444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Paris (75056)</span><br />Population : 2268265"}
			},
			{
				value: "859368",
				latitude: 43.296666666667,
				longitude: 5.3763888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marseille (13055)</span><br />Population : 859368"}
			},
			{
				value: "492578",
				latitude: 45.758888888889,
				longitude: 4.8413888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lyon (69123)</span><br />Population : 492578"}
			},
			{
				value: "449328",
				latitude: 43.604444444444,
				longitude: 1.4419444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Toulouse (31555)</span><br />Population : 449328"}
			},
			{
				value: "347105",
				latitude: 43.701944444444,
				longitude: 7.2683333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nice (06088)</span><br />Population : 347105"}
			},
			{
				value: "293234",
				latitude: 47.217222222222,
				longitude: -1.5538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nantes (44109)</span><br />Population : 293234"}
			},
			{
				value: "276401",
				latitude: 48.583611111111,
				longitude: 7.7480555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Strasbourg (67482)</span><br />Population : 276401"}
			},
			{
				value: "260572",
				latitude: 43.611111111111,
				longitude: 3.8766666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montpellier (34172)</span><br />Population : 260572"}
			},
			{
				value: "242945",
				latitude: 44.837777777778,
				longitude: -0.57944444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bordeaux (33063)</span><br />Population : 242945"}
			},
			{
				value: "234058",
				latitude: 50.631944444444,
				longitude: 3.0575,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lille (59350)</span><br />Population : 234058"}
			},
			{
				value: "212939",
				latitude: 48.114166666667,
				longitude: -1.6808333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rennes (35238)</span><br />Population : 212939"}
			},
			{
				value: "184011",
				latitude: 49.265277777778,
				longitude: 4.0286111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Reims (51454)</span><br />Population : 184011"}
			},
			{
				value: "178070",
				latitude: 49.498888888889,
				longitude: 0.12111111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Havre (76351)</span><br />Population : 178070"}
			},
			{
				value: "174566",
				latitude: 45.433888888889,
				longitude: 4.3897222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Étienne (42218)</span><br />Population : 174566"}
			},
			{
				value: "166851",
				latitude: 43.125,
				longitude: 5.9305555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Toulon (83137)</span><br />Population : 166851"}
			},
			{
				value: "158249",
				latitude: 45.186944444444,
				longitude: 5.7263888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Grenoble (38185)</span><br />Population : 158249"}
			},
			{
				value: "155233",
				latitude: 47.323055555556,
				longitude: 5.0419444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dijon (21231)</span><br />Population : 155233"}
			},
			{
				value: "151957",
				latitude: 47.472777777778,
				longitude: -0.55555555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Angers (49007)</span><br />Population : 151957"}
			},
			{
				value: "147108",
				latitude: 48.004166666667,
				longitude: 0.19694444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Mans (72181)</span><br />Population : 147108"}
			},
			{
				value: "146729",
				latitude: 45.766111111111,
				longitude: 4.8794444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeurbanne (69266)</span><br />Population : 146729"}
			},
			{
				value: "146489",
				latitude: -20.878888888889,
				longitude: 55.448055555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Denis (97411)</span><br />Population : 146489"}
			},
			{
				value: "145561",
				latitude: 48.39,
				longitude: -4.4869444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brest (29019)</span><br />Population : 145561"}
			},
			{
				value: "145501",
				latitude: 43.836944444444,
				longitude: 4.36,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nîmes (30189)</span><br />Population : 145501"}
			},
			{
				value: "144884",
				latitude: 43.527777777778,
				longitude: 5.4455555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aix-en-Provence (13001)</span><br />Population : 144884"}
			},
			{
				value: "143669",
				latitude: 45.779722222222,
				longitude: 3.0869444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Clermont-Ferrand (63113)</span><br />Population : 143669"}
			},
			{
				value: "141540",
				latitude: 45.834444444444,
				longitude: 1.2616666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Limoges (87085)</span><br />Population : 141540"}
			},
			{
				value: "138268",
				latitude: 47.392777777778,
				longitude: 0.68833333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tours (37261)</span><br />Population : 138268"}
			},
			{
				value: "136512",
				latitude: 49.891944444444,
				longitude: 2.2977777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Amiens (80021)</span><br />Population : 136512"}
			},
			{
				value: "122928",
				latitude: 49.119722222222,
				longitude: 6.1769444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Metz (57463)</span><br />Population : 122928"}
			},
			{
				value: "121038",
				latitude: 47.242222222222,
				longitude: 6.0213888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Besançon (25056)</span><br />Population : 121038"}
			},
			{
				value: "119536",
				latitude: 42.6975,
				longitude: 2.8947222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Perpignan (66136)</span><br />Population : 119536"}
			},
			{
				value: "117833",
				latitude: 47.902222222222,
				longitude: 1.9041666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Orléans (45234)</span><br />Population : 117833"}
			},
			{
				value: "115264",
				latitude: 48.835277777778,
				longitude: 2.2413888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Boulogne-Billancourt (92012)</span><br />Population : 115264"}
			},
			{
				value: "113461",
				latitude: 49.443055555556,
				longitude: 1.1025,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rouen (76540)</span><br />Population : 113461"}
			},
			{
				value: "111949",
				latitude: 49.182222222222,
				longitude: -0.37055555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Caen (14118)</span><br />Population : 111949"}
			},
			{
				value: "111273",
				latitude: 47.748611111111,
				longitude: 7.3391666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mulhouse (68224)</span><br />Population : 111273"}
			},
			{
				value: "107959",
				latitude: 48.935555555556,
				longitude: 2.3538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Denis (93066)</span><br />Population : 107959"}
			},
			{
				value: "107959",
				latitude: 48.935555555556,
				longitude: 2.3538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Denis (93066)</span><br />Population : 107959"}
			},
			{
				value: "107710",
				latitude: 48.692777777778,
				longitude: 6.1836111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nancy (54395)</span><br />Population : 107710"}
			},
			{
				value: "104843",
				latitude: 48.947777777778,
				longitude: 2.2475,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Argenteuil (95018)</span><br />Population : 104843"}
			},
			{
				value: "104818",
				latitude: -21.009722222222,
				longitude: 55.269722222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Paul (97415)</span><br />Population : 104818"}
			},
			{
				value: "103675",
				latitude: 48.860277777778,
				longitude: 2.4430555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montreuil (93048)</span><br />Population : 103675"}
			},
			{
				value: "95506",
				latitude: 50.689166666667,
				longitude: 3.1808333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roubaix (59512)</span><br />Population : 95506"}
			},
			{
				value: "93489",
				latitude: 51.037777777778,
				longitude: 2.3763888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dunkerque (59183)</span><br />Population : 93489"}
			},
			{
				value: "92620",
				latitude: 50.7225,
				longitude: 3.1602777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tourcoing (59599)</span><br />Population : 92620"}
			},
			{
				value: "91657",
				latitude: 43.948611111111,
				longitude: 4.8083333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Avignon (84007)</span><br />Population : 91657"}
			},
			{
				value: "91114",
				latitude: 48.890555555556,
				longitude: 2.2036111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nanterre (92050)</span><br />Population : 91114"}
			},
			{
				value: "90779",
				latitude: 48.790555555556,
				longitude: 2.4619444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Créteil (94028)</span><br />Population : 90779"}
			},
			{
				value: "90386",
				latitude: 46.581111111111,
				longitude: 0.33527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Poitiers (86194)</span><br />Population : 90386"}
			},
			{
				value: "88623",
				latitude: 14.607222222222,
				longitude: -61.069444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fort-de-France (97209)</span><br />Population : 88623"}
			},
			{
				value: "88253",
				latitude: 48.804722222222,
				longitude: 2.1341666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Versailles (78646)</span><br />Population : 88253"}
			},
			{
				value: "88169",
				latitude: 48.897222222222,
				longitude: 2.2522222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Courbevoie (92026)</span><br />Population : 88169"}
			},
			{
				value: "86210",
				latitude: 48.7875,
				longitude: 2.3927777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vitry-sur-Seine (94081)</span><br />Population : 86210"}
			},
			{
				value: "86094",
				latitude: 48.923611111111,
				longitude: 2.2522222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Colombes (92025)</span><br />Population : 86094"}
			},
			{
				value: "82998",
				latitude: 48.911111111111,
				longitude: 2.2855555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Asnières-sur-Seine (92004)</span><br />Population : 82998"}
			},
			{
				value: "82778",
				latitude: 48.936388888889,
				longitude: 2.4930555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aulnay-sous-Bois (93005)</span><br />Population : 82778"}
			},
			{
				value: "82776",
				latitude: 43.300833333333,
				longitude: -0.37,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pau (64445)</span><br />Population : 82776"}
			},
			{
				value: "80905",
				latitude: 48.877777777778,
				longitude: 2.1883333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rueil-Malmaison (92063)</span><br />Population : 80905"}
			},
			{
				value: "80027",
				latitude: -21.341944444444,
				longitude: 55.477777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Pierre (97416)</span><br />Population : 80027"}
			},
			{
				value: "77875",
				latitude: 46.159444444444,
				longitude: -1.1513888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Rochelle (17300)</span><br />Population : 77875"}
			},
			{
				value: "76728",
				latitude: 48.911111111111,
				longitude: 2.3825,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aubervilliers (93001)</span><br />Population : 76728"}
			},
			{
				value: "76235",
				latitude: 48.817222222222,
				longitude: 2.5155555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Champigny-sur-Marne (94017)</span><br />Population : 76235"}
			},
			{
				value: "75772",
				latitude: 48.798611111111,
				longitude: 2.4988888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Maur-des-Fossés (94068)</span><br />Population : 75772"}
			},
			{
				value: "75174",
				latitude: 43.58,
				longitude: 7.1230555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Antibes (06004)</span><br />Population : 75174"}
			},
			{
				value: "74573",
				latitude: 50.9475,
				longitude: 1.8555555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Calais (62193)</span><br />Population : 74573"}
			},
			{
				value: "74273",
				latitude: 43.5525,
				longitude: 7.0213888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cannes (06029)</span><br />Population : 74273"}
			},
			{
				value: "74174",
				latitude: -21.278055555556,
				longitude: 55.515277777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Tampon (97422)</span><br />Population : 74174"}
			},
			{
				value: "72466",
				latitude: 43.343333333333,
				longitude: 3.2161111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Béziers (34032)</span><br />Population : 72466"}
			},
			{
				value: "69724",
				latitude: 47.279444444444,
				longitude: -2.21,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Nazaire (44184)</span><br />Population : 69724"}
			},
			{
				value: "69187",
				latitude: 48.081111111111,
				longitude: 7.355,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Colmar (68066)</span><br />Population : 69187"}
			},
			{
				value: "68590",
				latitude: 47.083611111111,
				longitude: 2.3955555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bourges (18033)</span><br />Population : 68590"}
			},
			{
				value: "67202",
				latitude: 48.923333333333,
				longitude: 2.445,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Drancy (93029)</span><br />Population : 67202"}
			},
			{
				value: "67136",
				latitude: 44.8425,
				longitude: -0.645,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mérignac (33281)</span><br />Population : 67136"}
			},
			{
				value: "67131",
				latitude: 47.995833333333,
				longitude: -4.0977777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Quimper (29232)</span><br />Population : 67131"}
			},
			{
				value: "66203",
				latitude: 41.925555555556,
				longitude: 8.7363888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ajaccio (2A004)</span><br />Population : 66203"}
			},
			{
				value: "65178",
				latitude: 48.823055555556,
				longitude: 2.2691666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Issy-les-Moulineaux (92040)</span><br />Population : 65178"}
			},
			{
				value: "65043",
				latitude: 44.9325,
				longitude: 4.8908333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Valence (26362)</span><br />Population : 65043"}
			},
			{
				value: "64757",
				latitude: 48.893333333333,
				longitude: 2.2877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Levallois-Perret (92044)</span><br />Population : 64757"}
			},
			{
				value: "64328",
				latitude: 50.622777777778,
				longitude: 3.1441666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeneuve-d'Ascq (59009)</span><br />Population : 64328"}
			},
			{
				value: "63526",
				latitude: 48.843888888889,
				longitude: 2.5580555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Noisy-le-Grand (93051)</span><br />Population : 63526"}
			},
			{
				value: "62883",
				latitude: 43.103055555556,
				longitude: 5.8783333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Seyne-sur-Mer (83126)</span><br />Population : 62883"}
			},
			{
				value: "62644",
				latitude: 48.753333333333,
				longitude: 2.2966666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Antony (92002)</span><br />Population : 62644"}
			},
			{
				value: "62565",
				latitude: 48.887222222222,
				longitude: 2.2675,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Neuilly-sur-Seine (92051)</span><br />Population : 62565"}
			},
			{
				value: "61936",
				latitude: 48.298888888889,
				longitude: 4.0780555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Troyes (10387)</span><br />Population : 61936"}
			},
			{
				value: "60448",
				latitude: 45.696944444444,
				longitude: 4.8858333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vénissieux (69259)</span><br />Population : 60448"}
			},
			{
				value: "59504",
				latitude: 46.325,
				longitude: -0.46222222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Niort (79191)</span><br />Population : 59504"}
			},
			{
				value: "59267",
				latitude: 16.270555555556,
				longitude: -61.504722222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Abymes (97101)</span><br />Population : 59267"}
			},
			{
				value: "59228",
				latitude: 48.903611111111,
				longitude: 2.3055555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Clichy (92024)</span><br />Population : 59228"}
			},
			{
				value: "59204",
				latitude: 48.997222222222,
				longitude: 2.3780555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sarcelles (95585)</span><br />Population : 59204"}
			},
			{
				value: "59184",
				latitude: 45.566388888889,
				longitude: 5.9208333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chambéry (73065)</span><br />Population : 59184"}
			},
			{
				value: "58977",
				latitude: 44.805833333333,
				longitude: -0.63222222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pessac (33318)</span><br />Population : 58977"}
			},
			{
				value: "58831",
				latitude: 47.745833333333,
				longitude: -3.3663888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lorient (56121)</span><br />Population : 58831"}
			},
			{
				value: "58189",
				latitude: 48.813888888889,
				longitude: 2.3877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ivry-sur-Seine (94041)</span><br />Population : 58189"}
			},
			{
				value: "58014",
				latitude: 44.017222222222,
				longitude: 1.355,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montauban (82121)</span><br />Population : 58014"}
			},
			{
				value: "57900",
				latitude: 49.035833333333,
				longitude: 2.0625,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cergy (95127)</span><br />Population : 57900"}
			},
			{
				value: "57533",
				latitude: 49.847777777778,
				longitude: 3.2855555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Quentin (02691)</span><br />Population : 57533"}
			},
			{
				value: "56181",
				latitude: 49.434166666667,
				longitude: 2.0875,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Beauvais (60057)</span><br />Population : 56181"}
			},
			{
				value: "56137",
				latitude: 47.058888888889,
				longitude: -0.87972222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cholet (49099)</span><br />Population : 56137"}
			},
			{
				value: "56101",
				latitude: 46.669722222222,
				longitude: -1.4277777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Roche-sur-Yon (85191)</span><br />Population : 56101"}
			},
			{
				value: "56002",
				latitude: 4.9386111111111,
				longitude: -52.335,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cayenne (97302)</span><br />Population : 56002"}
			},
			{
				value: "55906",
				latitude: 43.118888888889,
				longitude: 6.1286111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hyères (83069)</span><br />Population : 55906"}
			},
			{
				value: "55879",
				latitude: 48.793888888889,
				longitude: 2.3611111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villejuif (94076)</span><br />Population : 55879"}
			},
			{
				value: "55116",
				latitude: 47.655,
				longitude: -2.7616666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vannes (56260)</span><br />Population : 55116"}
			},
			{
				value: "54775",
				latitude: 48.954722222222,
				longitude: 2.3083333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Épinay-sur-Seine (93031)</span><br />Population : 54775"}
			},
			{
				value: "54464",
				latitude: 48.898055555556,
				longitude: 2.4072222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pantin (93055)</span><br />Population : 54464"}
			},
			{
				value: "54311",
				latitude: -20.960555555556,
				longitude: 55.650555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-André (97409)</span><br />Population : 54311"}
			},
			{
				value: "54100",
				latitude: 48.072777777778,
				longitude: -0.77,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Laval (53130)</span><br />Population : 54100"}
			},
			{
				value: "53934",
				latitude: 48.902777777778,
				longitude: 2.4836111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bondy (93010)</span><br />Population : 53934"}
			},
			{
				value: "53785",
				latitude: 43.676944444444,
				longitude: 4.6286111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arles (13004)</span><br />Population : 53785"}
			},
			{
				value: "53667",
				latitude: 48.851666666667,
				longitude: 2.4772222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fontenay-sous-Bois (94033)</span><br />Population : 53667"}
			},
			{
				value: "53513",
				latitude: 48.805833333333,
				longitude: 2.4377777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maisons-Alfort (94046)</span><br />Population : 53513"}
			},
			{
				value: "53260",
				latitude: 49.023333333333,
				longitude: 1.1525,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Évreux (27229)</span><br />Population : 53260"}
			},
			{
				value: "53238",
				latitude: 48.878611111111,
				longitude: 2.5888888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chelles (77108)</span><br />Population : 53238"}
			},
			{
				value: "53113",
				latitude: 48.800833333333,
				longitude: 2.2619444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Clamart (92023)</span><br />Population : 53113"}
			},
			{
				value: "53019",
				latitude: 48.633888888889,
				longitude: 2.4441666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Évry (91228)</span><br />Population : 53019"}
			},
			{
				value: "52580",
				latitude: 43.433055555556,
				longitude: 6.7355555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fréjus (83061)</span><br />Population : 52580"}
			},
			{
				value: "52540",
				latitude: 48.959444444444,
				longitude: 2.8877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Meaux (77284)</span><br />Population : 52540"}
			},
			{
				value: "52507",
				latitude: -21.286666666667,
				longitude: 55.409166666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Louis (97414)</span><br />Population : 52507"}
			},
			{
				value: "52489",
				latitude: 43.184722222222,
				longitude: 3.0036111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Narbonne (11262)</span><br />Population : 52489"}
			},
			{
				value: "52375",
				latitude: 45.899166666667,
				longitude: 6.1294444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Annecy (74010)</span><br />Population : 52375"}
			},
			{
				value: "52185",
				latitude: 43.658055555556,
				longitude: 6.9252777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Grasse (06069)</span><br />Population : 52185"}
			},
			{
				value: "51735",
				latitude: 48.938611111111,
				longitude: 2.4611111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Blanc-Mesnil (93007)</span><br />Population : 51735"}
			},
			{
				value: "51647",
				latitude: 49.771388888889,
				longitude: 4.7194444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Charleville-Mézières (08105)</span><br />Population : 51647"}
			},
			{
				value: "51504",
				latitude: 48.945277777778,
				longitude: 2.17,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sartrouville (78586)</span><br />Population : 51504"}
			},
			{
				value: "51233",
				latitude: 47.641111111111,
				longitude: 6.8494444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Belfort (90010)</span><br />Population : 51233"}
			},
			{
				value: "51181",
				latitude: 43.928055555556,
				longitude: 2.1458333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Albi (81004)</span><br />Population : 51181"}
			},
			{
				value: "50272",
				latitude: 45.158888888889,
				longitude: 1.5330555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brive-la-Gaillarde (19031)</span><br />Population : 50272"}
			},
			{
				value: "50225",
				latitude: 48.941388888889,
				longitude: 2.5227777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sevran (93071)</span><br />Population : 50225"}
			},
			{
				value: "48983",
				latitude: 48.816388888889,
				longitude: 2.3211111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montrouge (92049)</span><br />Population : 48983"}
			},
			{
				value: "48955",
				latitude: 48.847777777778,
				longitude: 2.4391666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vincennes (94080)</span><br />Population : 48955"}
			},
			{
				value: "48893",
				latitude: 43.215833333333,
				longitude: 2.3513888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carcassonne (11069)</span><br />Population : 48893"}
			},
			{
				value: "48568",
				latitude: 47.593055555556,
				longitude: 1.3272222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Blois (41018)</span><br />Population : 48568"}
			},
			{
				value: "48261",
				latitude: 43.405277777778,
				longitude: 5.0475,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Martigues (13056)</span><br />Population : 48261"}
			},
			{
				value: "48246",
				latitude: 48.513611111111,
				longitude: -2.7602777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Brieuc (22278)</span><br />Population : 48246"}
			},
			{
				value: "48187",
				latitude: 46.809722222222,
				longitude: 1.6902777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châteauroux (36044)</span><br />Population : 48187"}
			},
			{
				value: "48133",
				latitude: 48.647222222222,
				longitude: -2.0088888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Malo (35288)</span><br />Population : 48133"}
			},
			{
				value: "47855",
				latitude: 48.909722222222,
				longitude: 2.4386111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bobigny (93008)</span><br />Population : 47855"}
			},
			{
				value: "47711",
				latitude: 43.663611111111,
				longitude: 7.1483333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cagnes-sur-Mer (06027)</span><br />Population : 47711"}
			},
			{
				value: "47604",
				latitude: 48.906944444444,
				longitude: 2.3330555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Ouen (93070)</span><br />Population : 47604"}
			},
			{
				value: "47121",
				latitude: 48.871111111111,
				longitude: 2.2269444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Suresnes (92073)</span><br />Population : 47121"}
			},
			{
				value: "46892",
				latitude: 43.290833333333,
				longitude: 5.5708333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aubagne (13005)</span><br />Population : 46892"}
			},
			{
				value: "46791",
				latitude: 46.793611111111,
				longitude: 4.8475,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chalon-sur-Saône (71076)</span><br />Population : 46791"}
			},
			{
				value: "46668",
				latitude: 48.956666666667,
				longitude: 4.3644444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châlons-en-Champagne (51108)</span><br />Population : 46668"}
			},
			{
				value: "46191",
				latitude: 43.4925,
				longitude: -1.4763888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bayonne (64102)</span><br />Population : 46191"}
			},
			{
				value: "45834",
				latitude: 48.8075,
				longitude: 2.2402777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Meudon (92048)</span><br />Population : 45834"}
			},
			{
				value: "45093",
				latitude: 48.884166666667,
				longitude: 2.2380555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Puteaux (92062)</span><br />Population : 45093"}
			},
			{
				value: "44952",
				latitude: 43.232777777778,
				longitude: 0.07444444444444399,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tarbes (65440)</span><br />Population : 44952"}
			},
			{
				value: "44439",
				latitude: 48.7975,
				longitude: 2.4241666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Alfortville (94002)</span><br />Population : 44439"}
			},
			{
				value: "44362",
				latitude: 50.359166666667,
				longitude: 3.525,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Valenciennes (59606)</span><br />Population : 44362"}
			},
			{
				value: "44219",
				latitude: 45.649444444444,
				longitude: 0.15944444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Angoulême (16015)</span><br />Population : 44219"}
			},
			{
				value: "44078",
				latitude: 47.211388888889,
				longitude: -1.6511111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Herblain (44162)</span><br />Population : 44078"}
			},
			{
				value: "43995",
				latitude: 43.605833333333,
				longitude: 2.24,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Castres (81065)</span><br />Population : 43995"}
			},
			{
				value: "43830",
				latitude: 43.640555555556,
				longitude: 5.0972222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Salon-de-Provence (13103)</span><br />Population : 43830"}
			},
			{
				value: "43805",
				latitude: 50.725555555556,
				longitude: 1.6138888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Boulogne-sur-Mer (62160)</span><br />Population : 43805"}
			},
			{
				value: "43747",
				latitude: 48.610277777778,
				longitude: 2.4747222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Corbeil-Essonnes (91174)</span><br />Population : 43747"}
			},
			{
				value: "43651",
				latitude: 43.514166666667,
				longitude: 4.9888888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Istres (13047)</span><br />Population : 43651"}
			},
			{
				value: "43615",
				latitude: 42.7,
				longitude: 9.449444444444399,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bastia (2B033)</span><br />Population : 43615"}
			},
			{
				value: "43530",
				latitude: 50.370833333333,
				longitude: 3.0791666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Douai (59178)</span><br />Population : 43530"}
			},
			{
				value: "43436",
				latitude: 43.404444444444,
				longitude: 3.6966666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sète (34301)</span><br />Population : 43436"}
			},
			{
				value: "43289",
				latitude: 50.289166666667,
				longitude: 2.78,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arras (62041)</span><br />Population : 43289"}
			},
			{
				value: "43268",
				latitude: 48.990555555556,
				longitude: 1.7166666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mantes-la-Jolie (78361)</span><br />Population : 43268"}
			},
			{
				value: "43006",
				latitude: 48.730555555556,
				longitude: 2.2763888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Massy (91377)</span><br />Population : 43006"}
			},
			{
				value: "42780",
				latitude: 43.576111111111,
				longitude: 7.0186111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Cannet (06030)</span><br />Population : 42780"}
			},
			{
				value: "42697",
				latitude: 44.127222222222,
				longitude: 4.0808333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Alès (30007)</span><br />Population : 42697"}
			},
			{
				value: "42428",
				latitude: 45.696388888889,
				longitude: 4.9438888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Priest (69290)</span><br />Population : 42428"}
			},
			{
				value: "42295",
				latitude: 49.414166666667,
				longitude: 2.8222222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Compiègne (60159)</span><br />Population : 42295"}
			},
			{
				value: "42184",
				latitude: 46.204722222222,
				longitude: 5.2280555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bourg-en-Bresse (01053)</span><br />Population : 42184"}
			},
			{
				value: "42060",
				latitude: 48.918333333333,
				longitude: 2.5352777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Livry-Gargan (93046)</span><br />Population : 42060"}
			},
			{
				value: "42009",
				latitude: 48.896388888889,
				longitude: 2.0905555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Germain-en-Laye (78551)</span><br />Population : 42009"}
			},
			{
				value: "41971",
				latitude: 44.808333333333,
				longitude: -0.5891666666666699,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Talence (33522)</span><br />Population : 41971"}
			},
			{
				value: "41971",
				latitude: 49.358055555556,
				longitude: 6.1683333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Thionville (57672)</span><br />Population : 41971"}
			},
			{
				value: "41970",
				latitude: 45.786944444444,
				longitude: 4.925,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vaulx-en-Velin (69256)</span><br />Population : 41970"}
			},
			{
				value: "41840",
				latitude: 45.794722222222,
				longitude: 4.8463888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Caluire-et-Cuire (69034)</span><br />Population : 41840"}
			},
			{
				value: "41809",
				latitude: 50.701111111111,
				longitude: 3.2133333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Wattrelos (59650)</span><br />Population : 41809"}
			},
			{
				value: "41676",
				latitude: 48.9325,
				longitude: 2.3047222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gennevilliers (92036)</span><br />Population : 41676"}
			},
			{
				value: "41659",
				latitude: 44.558611111111,
				longitude: 6.0777777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gap (05061)</span><br />Population : 41659"}
			},
			{
				value: "41431",
				latitude: 48.873055555556,
				longitude: 2.4852777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rosny-sous-Bois (93064)</span><br />Population : 41431"}
			},
			{
				value: "41275",
				latitude: 48.766388888889,
				longitude: 2.4077777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Choisy-le-Roi (94022)</span><br />Population : 41275"}
			},
			{
				value: "40609",
				latitude: 48.539722222222,
				longitude: 2.6591666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Melun (77288)</span><br />Population : 40609"}
			},
			{
				value: "40420",
				latitude: 48.446666666667,
				longitude: 1.4883333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chartres (28085)</span><br />Population : 40420"}
			},
			{
				value: "40274",
				latitude: 48.971944444444,
				longitude: 2.4,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Garges-lès-Gonesse (95268)</span><br />Population : 40274"}
			},
			{
				value: "39996",
				latitude: 14.615277777778,
				longitude: -61.001944444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Lamentin (97213)</span><br />Population : 39996"}
			},
			{
				value: "39949",
				latitude: 48.890833333333,
				longitude: 2.4536111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Noisy-le-Sec (93053)</span><br />Population : 39949"}
			},
			{
				value: "39782",
				latitude: 50.670277777778,
				longitude: 3.0963888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marcq-en-Barœul (59378)</span><br />Population : 39782"}
			},
			{
				value: "39772",
				latitude: 49.638611111111,
				longitude: -1.6158333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cherbourg-Octeville (50129)</span><br />Population : 39772"}
			},
			{
				value: "39712",
				latitude: 46.34,
				longitude: 2.6025,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montluçon (03185)</span><br />Population : 39712"}
			},
			{
				value: "39683",
				latitude: 47.190555555556,
				longitude: -1.5691666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rezé (44143)</span><br />Population : 39683"}
			},
			{
				value: "39432",
				latitude: 43.484166666667,
				longitude: -1.5194444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Anglet (64024)</span><br />Population : 39432"}
			},
			{
				value: "39350",
				latitude: 48.881666666667,
				longitude: 2.5388888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gagny (93032)</span><br />Population : 39350"}
			},
			{
				value: "39238",
				latitude: 45.738611111111,
				longitude: 4.9130555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bron (69029)</span><br />Population : 39238"}
			},
			{
				value: "38668",
				latitude: -20.939444444444,
				longitude: 55.287222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Port (97407)</span><br />Population : 38668"}
			},
			{
				value: "38657",
				latitude: 5.5038888888889,
				longitude: -54.028888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Laurent-du-Maroni (97311)</span><br />Population : 38657"}
			},
			{
				value: "38384",
				latitude: 48.797777777778,
				longitude: 2.3125,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bagneux (92007)</span><br />Population : 38384"}
			},
			{
				value: "38361",
				latitude: 48.931388888889,
				longitude: 2.3958333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Courneuve (93027)</span><br />Population : 38361"}
			},
			{
				value: "38352",
				latitude: 46.9925,
				longitude: 3.1566666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nevers (58194)</span><br />Population : 38352"}
			},
			{
				value: "38248",
				latitude: 47.7975,
				longitude: 3.5669444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Auxerre (89024)</span><br />Population : 38248"}
			},
			{
				value: "38225",
				latitude: 46.036111111111,
				longitude: 4.0680555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roanne (42187)</span><br />Population : 38225"}
			},
			{
				value: "38049",
				latitude: 48.928888888889,
				longitude: 2.0447222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Poissy (78498)</span><br />Population : 38049"}
			},
			{
				value: "37295",
				latitude: 43.539444444444,
				longitude: 6.4661111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Draguignan (83050)</span><br />Population : 37295"}
			},
			{
				value: "37203",
				latitude: 48.673888888889,
				longitude: 2.3525,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Savigny-sur-Orge (91589)</span><br />Population : 37203"}
			},
			{
				value: "36669",
				latitude: 44.558611111111,
				longitude: 4.7508333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montélimar (26198)</span><br />Population : 36669"}
			},
			{
				value: "36525",
				latitude: 47.350555555556,
				longitude: 0.66166666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Joué-lès-Tours (37122)</span><br />Population : 36525"}
			},
			{
				value: "36504",
				latitude: 45.166388888889,
				longitude: 5.7647222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Martin-d'Hères (38421)</span><br />Population : 36504"}
			},
			{
				value: "36459",
				latitude: -21.378611111111,
				longitude: 55.619166666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Joseph (97412)</span><br />Population : 36459"}
			},
			{
				value: "36397",
				latitude: 45.476388888889,
				longitude: 4.5147222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Chamond (42207)</span><br />Population : 36397"}
			},
			{
				value: "36054",
				latitude: 45.142777777778,
				longitude: 5.7177777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Échirolles (38151)</span><br />Population : 36054"}
			},
			{
				value: "35931",
				latitude: 48.960555555556,
				longitude: 2.5302777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villepinte (93078)</span><br />Population : 35931"}
			},
			{
				value: "35900",
				latitude: 45.989444444444,
				longitude: 4.7197222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villefranche-sur-Saône (69264)</span><br />Population : 35900"}
			},
			{
				value: "35873",
				latitude: 48.798333333333,
				longitude: 2.6052777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pontault-Combault (77373)</span><br />Population : 35873"}
			},
			{
				value: "35840",
				latitude: 48.997222222222,
				longitude: 2.0944444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Conflans-Sainte-Honorine (78172)</span><br />Population : 35840"}
			},
			{
				value: "35748",
				latitude: 50.431388888889,
				longitude: 2.8325,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lens (62498)</span><br />Population : 35748"}
			},
			{
				value: "35480",
				latitude: 43.612777777778,
				longitude: 1.3358333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Colomiers (31149)</span><br />Population : 35480"}
			},
			{
				value: "35459",
				latitude: 43.46,
				longitude: 5.2486111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vitrolles (13117)</span><br />Population : 35459"}
			},
			{
				value: "35415",
				latitude: 43.093333333333,
				longitude: 5.8394444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Six-Fours-les-Plages (83129)</span><br />Population : 35415"}
			},
			{
				value: "35293",
				latitude: 44.203055555556,
				longitude: 0.61861111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Agen (47001)</span><br />Population : 35293"}
			},
			{
				value: "35257",
				latitude: 46.370555555556,
				longitude: 6.4797222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Thonon-les-Bains (74281)</span><br />Population : 35257"}
			},
			{
				value: "35252",
				latitude: -21.033888888889,
				longitude: 55.712777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Benoît (97410)</span><br />Population : 35252"}
			},
			{
				value: "35118",
				latitude: 46.306666666667,
				longitude: 4.8319444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mâcon (71270)</span><br />Population : 35118"}
			},
			{
				value: "34913",
				latitude: 48.816666666667,
				longitude: 7.7877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haguenau (67180)</span><br />Population : 34913"}
			},
			{
				value: "34773",
				latitude: 43.416944444444,
				longitude: 5.2147222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marignane (13054)</span><br />Population : 34773"}
			},
			{
				value: "34744",
				latitude: 48.956111111111,
				longitude: 2.5763888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tremblay-en-France (93073)</span><br />Population : 34744"}
			},
			{
				value: "34575",
				latitude: 48.173611111111,
				longitude: 6.4516666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Épinal (88160)</span><br />Population : 34575"}
			},
			{
				value: "34514",
				latitude: 48.637777777778,
				longitude: 2.3322222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Geneviève-des-Bois (91549)</span><br />Population : 34514"}
			},
			{
				value: "34321",
				latitude: 45.045555555556,
				longitude: 5.0508333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Romans-sur-Isère (26281)</span><br />Population : 34321"}
			},
			{
				value: "34258",
				latitude: 43.176111111111,
				longitude: 5.6080555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Ciotat (13028)</span><br />Population : 34258"}
			},
			{
				value: "34232",
				latitude: 48.866944444444,
				longitude: 2.4169444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bagnolet (93006)</span><br />Population : 34232"}
			},
			{
				value: "34220",
				latitude: 43.424722222222,
				longitude: 6.7677777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Raphaël (83118)</span><br />Population : 34220"}
			},
			{
				value: "34220",
				latitude: 43.424722222222,
				longitude: 6.7677777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Raphaël (83118)</span><br />Population : 34220"}
			},
			{
				value: "34048",
				latitude: 48.955277777778,
				longitude: 2.3822222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Stains (93072)</span><br />Population : 34048"}
			},
			{
				value: "34001",
				latitude: 49.257777777778,
				longitude: 2.4827777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Creil (60175)</span><br />Population : 34001"}
			},
			{
				value: "33899",
				latitude: 48.770555555556,
				longitude: 2.0325,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montigny-le-Bretonneux (78423)</span><br />Population : 33899"}
			},
			{
				value: "33781",
				latitude: 48.857777777778,
				longitude: 2.5311111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Neuilly-sur-Marne (93050)</span><br />Population : 33781"}
			},
			{
				value: "33420",
				latitude: 46.816944444444,
				longitude: 0.54527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châtellerault (86066)</span><br />Population : 33420"}
			},
			{
				value: "33345",
				latitude: 50.175833333333,
				longitude: 3.2347222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cambrai (59122)</span><br />Population : 33345"}
			},
			{
				value: "33324",
				latitude: 48.988055555556,
				longitude: 2.2305555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Franconville (95252)</span><br />Population : 33324"}
			},
			{
				value: "33124",
				latitude: 43.890277777778,
				longitude: -0.50055555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mont-de-Marsan (40192)</span><br />Population : 33124"}
			},
			{
				value: "32966",
				latitude: 49.921666666667,
				longitude: 1.0777777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dieppe (76217)</span><br />Population : 32966"}
			},
			{
				value: "32947",
				latitude: 48.801111111111,
				longitude: 2.2886111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châtillon (92020)</span><br />Population : 32947"}
			},
			{
				value: "32799",
				latitude: 48.842222222222,
				longitude: 2.5036111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Perreux-sur-Marne (94058)</span><br />Population : 32799"}
			},
			{
				value: "32790",
				latitude: 46.195,
				longitude: 6.2355555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Annemasse (74012)</span><br />Population : 32790"}
			},
			{
				value: "32573",
				latitude: 48.765277777778,
				longitude: 2.2780555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châtenay-Malabry (92019)</span><br />Population : 32573"}
			},
			{
				value: "32506",
				latitude: 48.7325,
				longitude: 2.4497222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeneuve-Saint-Georges (94078)</span><br />Population : 32506"}
			},
			{
				value: "32396",
				latitude: 48.669444444444,
				longitude: 2.3758333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Viry-Châtillon (91687)</span><br />Population : 32396"}
			},
			{
				value: "32328",
				latitude: 50.421944444444,
				longitude: 2.7777777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Liévin (62510)</span><br />Population : 32328"}
			},
			{
				value: "31975",
				latitude: 48.836666666667,
				longitude: 2.4825,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nogent-sur-Marne (94052)</span><br />Population : 31975"}
			},
			{
				value: "31849",
				latitude: 48.925555555556,
				longitude: 2.1883333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Houilles (78311)</span><br />Population : 31849"}
			},
			{
				value: "31610",
				latitude: 48.736388888889,
				longitude: 1.3655555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dreux (28134)</span><br />Population : 31610"}
			},
			{
				value: "31464",
				latitude: 48.656111111111,
				longitude: 6.1675,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vandœuvre-lès-Nancy (54547)</span><br />Population : 31464"}
			},
			{
				value: "31435",
				latitude: 50.276944444444,
				longitude: 3.9725,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maubeuge (59392)</span><br />Population : 31435"}
			},
			{
				value: "31360",
				latitude: 48.817777777778,
				longitude: 1.9463888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Plaisir (78490)</span><br />Population : 31360"}
			},
			{
				value: "31325",
				latitude: 48.817222222222,
				longitude: 2.2991666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Malakoff (92046)</span><br />Population : 31325"}
			},
			{
				value: "31298",
				latitude: -21.166388888889,
				longitude: 55.286944444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Leu (97413)</span><br />Population : 31298"}
			},
			{
				value: "31237",
				latitude: 49.031666666667,
				longitude: 2.4736111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Goussainville (95280)</span><br />Population : 31237"}
			},
			{
				value: "31218",
				latitude: 48.606944444444,
				longitude: 7.7491666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Schiltigheim (67447)</span><br />Population : 31218"}
			},
			{
				value: "31175",
				latitude: 48.718333333333,
				longitude: 2.2497222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Palaiseau (91477)</span><br />Population : 31175"}
			},
			{
				value: "31116",
				latitude: 48.993055555556,
				longitude: 1.9083333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Mureaux (78440)</span><br />Population : 31116"}
			},
			{
				value: "31011",
				latitude: 49.050833333333,
				longitude: 2.1008333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pontoise (95500)</span><br />Population : 31011"}
			},
			{
				value: "31000",
				latitude: 45.184166666667,
				longitude: 0.71805555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Périgueux (24322)</span><br />Population : 31000"}
			},
			{
				value: "30845",
				latitude: 48.708611111111,
				longitude: 2.3891666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Athis-Mons (91027)</span><br />Population : 30845"}
			},
			{
				value: "30784",
				latitude: -20.926388888889,
				longitude: 55.335833333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Possession (97408)</span><br />Population : 30784"}
			},
			{
				value: "30775",
				latitude: 16.2675,
				longitude: -61.586944444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Baie-Mahault (97103)</span><br />Population : 30775"}
			},
			{
				value: "30672",
				latitude: 45.766388888889,
				longitude: 5.0027777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Meyzieu (69282)</span><br />Population : 30672"}
			},
			{
				value: "30667",
				latitude: 48.890555555556,
				longitude: 2.1569444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chatou (78146)</span><br />Population : 30667"}
			},
			{
				value: "30588",
				latitude: 48.779166666667,
				longitude: 2.3372222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">L'Haÿ-les-Roses (94038)</span><br />Population : 30588"}
			},
			{
				value: "30416",
				latitude: 48.846388888889,
				longitude: 2.2152777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Cloud (92064)</span><br />Population : 30416"}
			},
			{
				value: "30375",
				latitude: 45.820555555556,
				longitude: 4.8975,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rillieux-la-Pape (69286)</span><br />Population : 30375"}
			},
			{
				value: "30360",
				latitude: 44.055,
				longitude: 5.0480555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carpentras (84031)</span><br />Population : 30360"}
			},
			{
				value: "30293",
				latitude: -20.896944444444,
				longitude: 55.549166666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Marie (97418)</span><br />Population : 30293"}
			},
			{
				value: "30235",
				latitude: 43.673333333333,
				longitude: 7.19,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Laurent-du-Var (06123)</span><br />Population : 30235"}
			},
			{
				value: "30169",
				latitude: 45.525555555556,
				longitude: 4.8747222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vienne (38544)</span><br />Population : 30169"}
			},
			{
				value: "29998",
				latitude: 48.909166666667,
				longitude: 2.5472222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Clichy-sous-Bois (93014)</span><br />Population : 29998"}
			},
			{
				value: "29949",
				latitude: 48.764444444444,
				longitude: 2.3913888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Thiais (94073)</span><br />Population : 29949"}
			},
			{
				value: "29846",
				latitude: 49.381111111111,
				longitude: 3.3225,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Soissons (02722)</span><br />Population : 29846"}
			},
			{
				value: "29791",
				latitude: 44.1375,
				longitude: 4.8088888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Orange (84087)</span><br />Population : 29791"}
			},
			{
				value: "29705",
				latitude: 48.776666666667,
				longitude: 2.0016666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Trappes (78621)</span><br />Population : 29705"}
			},
			{
				value: "29682",
				latitude: 48.820277777778,
				longitude: 2.1302777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Chesnay (78158)</span><br />Population : 29682"}
			},
			{
				value: "29677",
				latitude: 44.925277777778,
				longitude: 2.4397222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aurillac (15014)</span><br />Population : 29677"}
			},
			{
				value: "29664",
				latitude: 48.821388888889,
				longitude: 2.4119444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Charenton-le-Pont (94018)</span><br />Population : 29664"}
			},
			{
				value: "29519",
				latitude: 48.9175,
				longitude: 2.2683333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bois-Colombes (92009)</span><br />Population : 29519"}
			},
			{
				value: "29518",
				latitude: 49.408611111111,
				longitude: 1.0891666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sotteville-lès-Rouen (76681)</span><br />Population : 29518"}
			},
			{
				value: "29392",
				latitude: 48.716111111111,
				longitude: 2.4908333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Yerres (91691)</span><br />Population : 29392"}
			},
			{
				value: "29389",
				latitude: 43.774722222222,
				longitude: 7.4997222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Menton (06083)</span><br />Population : 29389"}
			},
			{
				value: "28905",
				latitude: 44.779444444444,
				longitude: -0.56694444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villenave-d'Ornon (33550)</span><br />Population : 28905"}
			},
			{
				value: "28870",
				latitude: 50.649444444444,
				longitude: 3.0241666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lambersart (59328)</span><br />Population : 28870"}
			},
			{
				value: "28838",
				latitude: 48.575833333333,
				longitude: 2.5827777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Savigny-le-Temple (77445)</span><br />Population : 28838"}
			},
			{
				value: "28802",
				latitude: 48.686111111111,
				longitude: 2.4094444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Draveil (91201)</span><br />Population : 28802"}
			},
			{
				value: "28772",
				latitude: 47.259166666667,
				longitude: -0.078055555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saumur (49328)</span><br />Population : 28772"}
			},
			{
				value: "28691",
				latitude: 44.851111111111,
				longitude: 0.48194444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bergerac (24037)</span><br />Population : 28691"}
			},
			{
				value: "28601",
				latitude: 49.377777777778,
				longitude: 1.1041666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Étienne-du-Rouvray (76575)</span><br />Population : 28601"}
			},
			{
				value: "28550",
				latitude: 48.791944444444,
				longitude: 2.3319444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cachan (94016)</span><br />Population : 28550"}
			},
			{
				value: "28518",
				latitude: 48.770555555556,
				longitude: 2.0730555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guyancourt (78297)</span><br />Population : 28518"}
			},
			{
				value: "28450",
				latitude: 43.579722222222,
				longitude: 7.0533333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vallauris (06155)</span><br />Population : 28450"}
			},
			{
				value: "28439",
				latitude: 45.688611111111,
				longitude: 5.915,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aix-les-Bains (73008)</span><br />Population : 28439"}
			},
			{
				value: "28407",
				latitude: 4.8505555555556,
				longitude: -52.331111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Matoury (97307)</span><br />Population : 28407"}
			},
			{
				value: "28396",
				latitude: 44.895555555556,
				longitude: -0.7175,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Médard-en-Jalles (33449)</span><br />Population : 28396"}
			},
			{
				value: "28277",
				latitude: 48.925555555556,
				longitude: 2.2169444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bezons (95063)</span><br />Population : 28277"}
			},
			{
				value: "28257",
				latitude: 48.890277777778,
				longitude: 2.5111111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villemomble (93077)</span><br />Population : 28257"}
			},
			{
				value: "28076",
				latitude: 48.964722222222,
				longitude: 2.3608333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pierrefitte-sur-Seine (93059)</span><br />Population : 28076"}
			},
			{
				value: "27931",
				latitude: 48.783333333333,
				longitude: 2.2636111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Plessis-Robinson (92060)</span><br />Population : 27931"}
			},
			{
				value: "27923",
				latitude: 48.905,
				longitude: 2.2436111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Garenne-Colombes (92035)</span><br />Population : 27923"}
			},
			{
				value: "27863",
				latitude: 48.429722222222,
				longitude: 0.091944444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Alençon (61001)</span><br />Population : 27863"}
			},
			{
				value: "27713",
				latitude: 48.991388888889,
				longitude: 2.2594444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ermont (95219)</span><br />Population : 27713"}
			},
			{
				value: "27689",
				latitude: 48.651111111111,
				longitude: 2.4130555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ris-Orangis (91521)</span><br />Population : 27689"}
			},
			{
				value: "27675",
				latitude: 47.221944444444,
				longitude: 2.0683333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vierzon (18279)</span><br />Population : 27675"}
			},
			{
				value: "27568",
				latitude: 48.8275,
				longitude: 2.5447222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villiers-sur-Marne (94079)</span><br />Population : 27568"}
			},
			{
				value: "27556",
				latitude: 48.524722222222,
				longitude: 7.7144444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Illkirch-Graffenstaden (67218)</span><br />Population : 27556"}
			},
			{
				value: "27546",
				latitude: 48.700277777778,
				longitude: 2.4172222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vigneux-sur-Seine (91657)</span><br />Population : 27546"}
			},
			{
				value: "27430",
				latitude: 45.745277777778,
				longitude: -0.63444444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saintes (17415)</span><br />Population : 27430"}
			},
			{
				value: "27314",
				latitude: 48.82,
				longitude: 2.2888888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vanves (92075)</span><br />Population : 27314"}
			},
			{
				value: "27262",
				latitude: 48.783888888889,
				longitude: 1.9580555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Élancourt (78208)</span><br />Population : 27262"}
			},
			{
				value: "27004",
				latitude: 49.008888888889,
				longitude: 2.3902777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villiers-le-Bel (95680)</span><br />Population : 27004"}
			},
			{
				value: "27001",
				latitude: 48.643611111111,
				longitude: 1.83,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rambouillet (78517)</span><br />Population : 27001"}
			},
			{
				value: "26991",
				latitude: 49.563333333333,
				longitude: 3.6236111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Laon (02408)</span><br />Population : 26991"}
			},
			{
				value: "26841",
				latitude: 45.590833333333,
				longitude: 5.2791666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bourgoin-Jallieu (38053)</span><br />Population : 26841"}
			},
			{
				value: "26796",
				latitude: 48.656666666667,
				longitude: 2.3880555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Grigny (91286)</span><br />Population : 26796"}
			},
			{
				value: "26743",
				latitude: 16.205555555556,
				longitude: -61.491944444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Gosier (97113)</span><br />Population : 26743"}
			},
			{
				value: "26728",
				latitude: 50.421111111111,
				longitude: 2.95,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hénin-Beaumont (62427)</span><br />Population : 26728"}
			},
			{
				value: "26659",
				latitude: 48.971666666667,
				longitude: 2.2569444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sannois (95582)</span><br />Population : 26659"}
			},
			{
				value: "26627",
				latitude: 48.986666666667,
				longitude: 2.4486111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gonesse (95277)</span><br />Population : 26627"}
			},
			{
				value: "26549",
				latitude: 48.637777777778,
				longitude: 4.9488888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Dizier (52448)</span><br />Population : 26549"}
			},
			{
				value: "26533",
				latitude: 48.990277777778,
				longitude: 2.1655555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Herblay (95306)</span><br />Population : 26533"}
			},
			{
				value: "26530",
				latitude: 50.529722222222,
				longitude: 2.64,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Béthune (62119)</span><br />Population : 26530"}
			},
			{
				value: "26501",
				latitude: 47.509722222222,
				longitude: 6.7983333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montbéliard (25388)</span><br />Population : 26501"}
			},
			{
				value: "26446",
				latitude: 48.758888888889,
				longitude: 2.3236111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fresnes (94034)</span><br />Population : 26446"}
			},
			{
				value: "26440",
				latitude: 49.025833333333,
				longitude: 2.2266666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Taverny (95607)</span><br />Population : 26440"}
			},
			{
				value: "26321",
				latitude: 43.124722222222,
				longitude: 6.0105555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Garde (83062)</span><br />Population : 26321"}
			},
			{
				value: "26306",
				latitude: 49.091666666667,
				longitude: 1.485,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vernon (27681)</span><br />Population : 26306"}
			},
			{
				value: "26267",
				latitude: 48.81,
				longitude: 2.3580555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Kremlin-Bicêtre (94043)</span><br />Population : 26267"}
			},
			{
				value: "26150",
				latitude: 48.769722222222,
				longitude: 2.5227777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sucy-en-Brie (94071)</span><br />Population : 26150"}
			},
			{
				value: "26025",
				latitude: 48.883611111111,
				longitude: 2.4361111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Romainville (93063)</span><br />Population : 26025"}
			},
			{
				value: "25994",
				latitude: 43.480555555556,
				longitude: -1.5572222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Biarritz (64122)</span><br />Population : 25994"}
			},
			{
				value: "25988",
				latitude: 45.768611111111,
				longitude: 4.9588888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Décines-Charpieu (69275)</span><br />Population : 25988"}
			},
			{
				value: "25974",
				latitude: 44.35,
				longitude: 2.5741666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rodez (12202)</span><br />Population : 25974"}
			},
			{
				value: "25962",
				latitude: 45.941944444444,
				longitude: -0.9669444444444401,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rochefort (17299)</span><br />Population : 25962"}
			},
			{
				value: "25854",
				latitude: 43.584444444444,
				longitude: 1.3436111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tournefeuille (31557)</span><br />Population : 25854"}
			},
			{
				value: "25832",
				latitude: 47.207222222222,
				longitude: -1.5025,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Sébastien-sur-Loire (44190)</span><br />Population : 25832"}
			},
			{
				value: "25823",
				latitude: 43.581388888889,
				longitude: 5.0013888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Miramas (13063)</span><br />Population : 25823"}
			},
			{
				value: "25786",
				latitude: 50.687222222222,
				longitude: 2.8802777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Armentières (59017)</span><br />Population : 25786"}
			},
			{
				value: "25785",
				latitude: 48.698055555556,
				longitude: 2.5033333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brunoy (91114)</span><br />Population : 25785"}
			},
			{
				value: "25776",
				latitude: 47.092222222222,
				longitude: 5.4897222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dole (39198)</span><br />Population : 25776"}
			},
			{
				value: "25676",
				latitude: 48.197222222222,
				longitude: 3.2833333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sens (89387)</span><br />Population : 25676"}
			},
			{
				value: "25509",
				latitude: 43.676944444444,
				longitude: 4.1352777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lunel (34145)</span><br />Population : 25509"}
			},
			{
				value: "25499",
				latitude: 48.898333333333,
				longitude: 2.5647222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montfermeil (93047)</span><br />Population : 25499"}
			},
			{
				value: "25440",
				latitude: 43.836666666667,
				longitude: 5.0372222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cavaillon (84035)</span><br />Population : 25440"}
			},
			{
				value: "25413",
				latitude: 45.714166666667,
				longitude: 4.8075,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Oullins (69149)</span><br />Population : 25413"}
			},
			{
				value: "25404",
				latitude: 5.1583333333333,
				longitude: -52.642777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Kourou (97304)</span><br />Population : 25404"}
			},
			{
				value: "25374",
				latitude: 48.937222222222,
				longitude: 2.3277777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeneuve-la-Garenne (92078)</span><br />Population : 25374"}
			},
			{
				value: "25235",
				latitude: 46.126944444444,
				longitude: 3.4258333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vichy (03310)</span><br />Population : 25235"}
			},
			{
				value: "25216",
				latitude: 47.270833333333,
				longitude: -1.6236111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Orvault (44114)</span><br />Population : 25216"}
			},
			{
				value: "25205",
				latitude: 44.807777777778,
				longitude: -0.54888888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bègles (33039)</span><br />Population : 25205"}
			},
			{
				value: "25189",
				latitude: 49.406388888889,
				longitude: 1.0522222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Grand-Quevilly (76322)</span><br />Population : 25189"}
			},
			{
				value: "25055",
				latitude: 48.682222222222,
				longitude: 2.1675,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Ulis (91692)</span><br />Population : 25055"}
			},
			{
				value: "25018",
				latitude: 44.6325,
				longitude: -1.145,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Teste-de-Buch (33529)</span><br />Population : 25018"}
			},
			{
				value: "24972",
				latitude: 43.31,
				longitude: 3.4752777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Agde (34003)</span><br />Population : 24972"}
			},
			{
				value: "24953",
				latitude: 50.105277777778,
				longitude: 1.8352777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Abbeville (80001)</span><br />Population : 24953"}
			},
			{
				value: "24733",
				latitude: 49.04,
				longitude: 3.9591666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Épernay (51230)</span><br />Population : 24733"}
			},
			{
				value: "24700",
				latitude: 44.406944444444,
				longitude: 0.70416666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeneuve-sur-Lot (47323)</span><br />Population : 24700"}
			},
			{
				value: "24653",
				latitude: 43.460277777778,
				longitude: 1.3258333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Muret (31395)</span><br />Population : 24653"}
			},
			{
				value: "24636",
				latitude: 48.852777777778,
				longitude: 2.6019444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Champs-sur-Marne (77083)</span><br />Population : 24636"}
			},
			{
				value: "24611",
				latitude: 16.225555555556,
				longitude: -61.386111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Anne (97128)</span><br />Population : 24611"}
			},
			{
				value: "24500",
				latitude: 48.110833333333,
				longitude: 5.1386111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chaumont (52121)</span><br />Population : 24500"}
			},
			{
				value: "24386",
				latitude: 48.991388888889,
				longitude: 2.2797222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Eaubonne (95203)</span><br />Population : 24386"}
			},
			{
				value: "24302",
				latitude: 44.915277777778,
				longitude: -0.24388888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Libourne (33243)</span><br />Population : 24302"}
			},
			{
				value: "24296",
				latitude: 48.942777777778,
				longitude: 2.6063888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeparisis (77514)</span><br />Population : 24296"}
			},
			{
				value: "24095",
				latitude: 14.6775,
				longitude: -60.939166666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Robert (97222)</span><br />Population : 24095"}
			},
			{
				value: "23889",
				latitude: 49.044166666667,
				longitude: 2.1102777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Ouen-l'Aumône (95572)</span><br />Population : 23889"}
			},
			{
				value: "23869",
				latitude: 50.481111111111,
				longitude: 2.5477777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bruay-la-Buissière (62178)</span><br />Population : 23869"}
			},
			{
				value: "23812",
				latitude: 48.609444444444,
				longitude: 2.3077777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brétigny-sur-Orge (91103)</span><br />Population : 23812"}
			},
			{
				value: "23663",
				latitude: 48.841666666667,
				longitude: 2.6977777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bussy-Saint-Georges (77058)</span><br />Population : 23663"}
			},
			{
				value: "23606",
				latitude: 16.191388888889,
				longitude: -61.590277777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Petit-Bourg (97118)</span><br />Population : 23606"}
			},
			{
				value: "23603",
				latitude: 48.789166666667,
				longitude: 2.2855555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fontenay-aux-Roses (92032)</span><br />Population : 23603"}
			},
			{
				value: "23575",
				latitude: 48.435,
				longitude: 2.1622222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Étampes (91223)</span><br />Population : 23575"}
			},
			{
				value: "23546",
				latitude: 44.771388888889,
				longitude: -0.61694444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gradignan (33192)</span><br />Population : 23546"}
			},
			{
				value: "23539",
				latitude: 44.864722222222,
				longitude: -0.59861111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Bouscat (33069)</span><br />Population : 23539"}
			},
			{
				value: "23412",
				latitude: 48.823055555556,
				longitude: 2.2108333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sèvres (92072)</span><br />Population : 23412"}
			},
			{
				value: "23318",
				latitude: 48.973055555556,
				longitude: 2.2005555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cormeilles-en-Parisis (95176)</span><br />Population : 23318"}
			},
			{
				value: "23308",
				latitude: 46.255555555556,
				longitude: 5.655,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Oyonnax (01283)</span><br />Population : 23308"}
			},
			{
				value: "23287",
				latitude: 48.946111111111,
				longitude: 2.145,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maisons-Laffitte (78358)</span><br />Population : 23287"}
			},
			{
				value: "23186",
				latitude: 46.800555555556,
				longitude: 4.4402777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Creusot (71153)</span><br />Population : 23186"}
			},
			{
				value: "23135",
				latitude: 47.024166666667,
				longitude: 4.8388888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Beaune (21054)</span><br />Population : 23135"}
			},
			{
				value: "23131",
				latitude: 48.7075,
				longitude: 2.4552777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montgeron (91421)</span><br />Population : 23131"}
			},
			{
				value: "23049",
				latitude: 49.099722222222,
				longitude: 6.1533333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montigny-lès-Metz (57480)</span><br />Population : 23049"}
			},
			{
				value: "22931",
				latitude: 43.645277777778,
				longitude: 0.58861111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Auch (32013)</span><br />Population : 22931"}
			},
			{
				value: "22918",
				latitude: 51.024722222222,
				longitude: 2.3908333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Coudekerque-Branche (59155)</span><br />Population : 22918"}
			},
			{
				value: "22852",
				latitude: 43.833333333333,
				longitude: 5.7830555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Manosque (04112)</span><br />Population : 22852"}
			},
			{
				value: "22775",
				latitude: 44.097777777778,
				longitude: 3.0777777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Millau (12145)</span><br />Population : 22775"}
			},
			{
				value: "22758",
				latitude: 50.655277777778,
				longitude: 3.0702777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Madeleine (59368)</span><br />Population : 22758"}
			},
			{
				value: "22744",
				latitude: 47.763333333333,
				longitude: -3.3388888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lanester (56098)</span><br />Population : 22744"}
			},
			{
				value: "22743",
				latitude: 43.447222222222,
				longitude: 3.7555555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Frontignan (34108)</span><br />Population : 22743"}
			},
			{
				value: "22716",
				latitude: 16.331111111111,
				longitude: -61.343611111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Moule (97117)</span><br />Population : 22716"}
			},
			{
				value: "22666",
				latitude: 48.841388888889,
				longitude: 2.4177777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Mandé (94067)</span><br />Population : 22666"}
			},
			{
				value: "22639",
				latitude: 48.850277777778,
				longitude: 2.6508333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Torcy (77468)</span><br />Population : 22639"}
			},
			{
				value: "22627",
				latitude: -20.905555555556,
				longitude: 55.607222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Suzanne (97420)</span><br />Population : 22627"}
			},
			{
				value: "22588",
				latitude: 44.856944444444,
				longitude: -0.53277777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cenon (33119)</span><br />Population : 22588"}
			},
			{
				value: "22547",
				latitude: 49.145555555556,
				longitude: 0.22555555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lisieux (14366)</span><br />Population : 22547"}
			},
			{
				value: "22514",
				latitude: 48.791111111111,
				longitude: 2.6513888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roissy-en-Brie (77390)</span><br />Population : 22514"}
			},
			{
				value: "22498",
				latitude: 43.545555555556,
				longitude: 6.9375,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mandelieu-la-Napoule (06079)</span><br />Population : 22498"}
			},
			{
				value: "22485",
				latitude: 45.193055555556,
				longitude: 5.6847222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fontaine (38169)</span><br />Population : 22485"}
			},
			{
				value: "22410",
				latitude: 48.88,
				longitude: 2.4169444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Lilas (93045)</span><br />Population : 22410"}
			},
			{
				value: "22229",
				latitude: 45.733611111111,
				longitude: 4.8025,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Foy-lès-Lyon (69202)</span><br />Population : 22229"}
			},
			{
				value: "22225",
				latitude: 48.284166666667,
				longitude: 6.9491666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Dié-des-Vosges (88413)</span><br />Population : 22225"}
			},
			{
				value: "22215",
				latitude: 49.430555555556,
				longitude: 1.0527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Petit-Quevilly (76498)</span><br />Population : 22215"}
			},
			{
				value: "22119",
				latitude: 43.635555555556,
				longitude: 1.39,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Blagnac (31069)</span><br />Population : 22119"}
			},
			{
				value: "22117",
				latitude: 47.168055555556,
				longitude: -1.4713888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vertou (44215)</span><br />Population : 22117"}
			},
			{
				value: "22094",
				latitude: 49.110555555556,
				longitude: 7.0672222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sarreguemines (57631)</span><br />Population : 22094"}
			},
			{
				value: "22086",
				latitude: 50.724444444444,
				longitude: 2.5383333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hazebrouck (59295)</span><br />Population : 22086"}
			},
			{
				value: "22081",
				latitude: 50.612222222222,
				longitude: 3.0136111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Loos (59360)</span><br />Population : 22081"}
			},
			{
				value: "22036",
				latitude: 50.641944444444,
				longitude: 3.1077777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mons-en-Barœul (59410)</span><br />Population : 22036"}
			},
			{
				value: "21972",
				latitude: 48.905833333333,
				longitude: 2.5105555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Pavillons-sous-Bois (93057)</span><br />Population : 21972"}
			},
			{
				value: "21920",
				latitude: 49.188055555556,
				longitude: 6.9,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Forbach (57227)</span><br />Population : 21920"}
			},
			{
				value: "21876",
				latitude: 49.460555555556,
				longitude: 1.1080555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bois-Guillaume (76108)</span><br />Population : 21876"}
			},
			{
				value: "21876",
				latitude: 49.460555555556,
				longitude: 1.1080555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bois-Guillaume - Bihorel (76108)</span><br />Population : 21876"}
			},
			{
				value: "21845",
				latitude: 48.661944444444,
				longitude: 2.5630555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Combs-la-Ville (77122)</span><br />Population : 21845"}
			},
			{
				value: "21829",
				latitude: 49.203611111111,
				longitude: -0.32638888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hérouville-Saint-Clair (14327)</span><br />Population : 21829"}
			},
			{
				value: "21741",
				latitude: 48.975,
				longitude: 2.3286111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Deuil-la-Barre (95197)</span><br />Population : 21741"}
			},
			{
				value: "21702",
				latitude: 43.706944444444,
				longitude: -1.0513888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dax (40088)</span><br />Population : 21702"}
			},
			{
				value: "21691",
				latitude: 48.743611111111,
				longitude: 2.3927777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Orly (94054)</span><br />Population : 21691"}
			},
			{
				value: "21574",
				latitude: 48.696944444444,
				longitude: 2.2955555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Longjumeau (91345)</span><br />Population : 21574"}
			},
			{
				value: "21475",
				latitude: 48.989722222222,
				longitude: 2.3219444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montmorency (95428)</span><br />Population : 21475"}
			},
			{
				value: "21450",
				latitude: 47.931944444444,
				longitude: 1.9211111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fleury-les-Aubrais (45147)</span><br />Population : 21450"}
			},
			{
				value: "21374",
				latitude: 48.85,
				longitude: 2.145,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Celle-Saint-Cloud (78126)</span><br />Population : 21374"}
			},
			{
				value: "21333",
				latitude: 44.4475,
				longitude: 1.4405555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cahors (46042)</span><br />Population : 21333"}
			},
			{
				value: "21259",
				latitude: 48.701388888889,
				longitude: 2.1336111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gif-sur-Yvette (91272)</span><br />Population : 21259"}
			},
			{
				value: "21235",
				latitude: 51.013055555556,
				longitude: 2.3022222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Grande-Synthe (59271)</span><br />Population : 21235"}
			},
			{
				value: "21209",
				latitude: 14.616111111111,
				longitude: -61.101388888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Schœlcher (97229)</span><br />Population : 21209"}
			},
			{
				value: "21113",
				latitude: 48.663333333333,
				longitude: 2.3513888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Morsang-sur-Orge (91434)</span><br />Population : 21113"}
			},
			{
				value: "21035",
				latitude: 43.137222222222,
				longitude: 5.9825,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Valette-du-Var (83144)</span><br />Population : 21035"}
			},
			{
				value: "20983",
				latitude: 48.7325,
				longitude: -3.4552777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lannion (22113)</span><br />Population : 20983"}
			},
			{
				value: "20982",
				latitude: 45.695277777778,
				longitude: 4.7930555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Genis-Laval (69204)</span><br />Population : 20982"}
			},
			{
				value: "20962",
				latitude: 50.674722222222,
				longitude: 3.1538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Croix (59163)</span><br />Population : 20962"}
			},
			{
				value: "20923",
				latitude: 48.515277777778,
				longitude: 2.6344444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dammarie-les-Lys (77152)</span><br />Population : 20923"}
			},
			{
				value: "20881",
				latitude: 45.919166666667,
				longitude: 6.1419444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Annecy-le-Vieux (74011)</span><br />Population : 20881"}
			},
			{
				value: "20830",
				latitude: 48.5375,
				longitude: 2.6319444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Mée-sur-Seine (77285)</span><br />Population : 20830"}
			},
			{
				value: "20799",
				latitude: 43.454444444444,
				longitude: 5.4761111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gardanne (13041)</span><br />Population : 20799"}
			},
			{
				value: "20683",
				latitude: 48.860833333333,
				longitude: 2.5097222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Neuilly-Plaisance (93049)</span><br />Population : 20683"}
			},
			{
				value: "20637",
				latitude: 48.351666666667,
				longitude: -1.2,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fougères (35115)</span><br />Population : 20637"}
			},
			{
				value: "20598",
				latitude: 48.769166666667,
				longitude: 2.6791666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ozoir-la-Ferrière (77350)</span><br />Population : 20598"}
			},
			{
				value: "20573",
				latitude: 45.363333333333,
				longitude: 5.59,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Voiron (38563)</span><br />Population : 20573"}
			},
			{
				value: "20538",
				latitude: 48.878055555556,
				longitude: 2.7066666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lagny-sur-Marne (77243)</span><br />Population : 20538"}
			},
			{
				value: "20523",
				latitude: 50.328611111111,
				longitude: 3.395,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Denain (59172)</span><br />Population : 20523"}
			},
			{
				value: "20481",
				latitude: 47.585277777778,
				longitude: 7.565,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Louis (68297)</span><br />Population : 20481"}
			},
			{
				value: "20443",
				latitude: 16.333055555556,
				longitude: -61.698055555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Rose (97129)</span><br />Population : 20443"}
			},
			{
				value: "20370",
				latitude: 50.782777777778,
				longitude: 3.1247222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Halluin (59279)</span><br />Population : 20370"}
			},
			{
				value: "20348",
				latitude: 48.783333333333,
				longitude: 2.1883333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vélizy-Villacoublay (78640)</span><br />Population : 20348"}
			},
			{
				value: "20345",
				latitude: 48.6325,
				longitude: 2.3027777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Michel-sur-Orge (91570)</span><br />Population : 20345"}
			},
			{
				value: "20326",
				latitude: 48.971111111111,
				longitude: 2.2819444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Gratien (95555)</span><br />Population : 20326"}
			},
			{
				value: "20303",
				latitude: 48.778055555556,
				longitude: 2.3158333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bourg-la-Reine (92014)</span><br />Population : 20303"}
			},
			{
				value: "20293",
				latitude: 50.668611111111,
				longitude: 3.13,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Wasquehal (59646)</span><br />Population : 20293"}
			},
			{
				value: "20286",
				latitude: 48.589444444444,
				longitude: 6.5016666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lunéville (54329)</span><br />Population : 20286"}
			},
			{
				value: "20271",
				latitude: 44.879166666667,
				longitude: -0.5216666666666701,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lormont (33249)</span><br />Population : 20271"}
			},
			{
				value: "20229",
				latitude: 46.564722222222,
				longitude: 3.3325,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Moulins (03190)</span><br />Population : 20229"}
			},
			{
				value: "20196",
				latitude: 47.863055555556,
				longitude: 1.8997222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Olivet (45232)</span><br />Population : 20196"}
			},
			{
				value: "20112",
				latitude: 48.746388888889,
				longitude: 2.4883333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Limeil-Brévannes (94044)</span><br />Population : 20112"}
			},
			{
				value: "19998",
				latitude: 44.884444444444,
				longitude: -0.65138888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Eysines (33162)</span><br />Population : 19998"}
			},
			{
				value: "19986",
				latitude: 48.778611111111,
				longitude: 2.2905555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sceaux (92071)</span><br />Population : 19986"}
			},
			{
				value: "19964",
				latitude: 48.806666666667,
				longitude: 2.3352777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arcueil (94003)</span><br />Population : 19964"}
			},
			{
				value: "19944",
				latitude: 49.114444444444,
				longitude: -1.0916666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Lô (50502)</span><br />Population : 19944"}
			},
			{
				value: "19938",
				latitude: 45.763333333333,
				longitude: 4.78,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tassin-la-Demi-Lune (69244)</span><br />Population : 19938"}
			},
			{
				value: "19880",
				latitude: 49.4625,
				longitude: 1.0872222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mont-Saint-Aignan (76451)</span><br />Population : 19880"}
			},
			{
				value: "19877",
				latitude: 44.635277777778,
				longitude: -1.0677777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gujan-Mestras (33199)</span><br />Population : 19877"}
			},
			{
				value: "19855",
				latitude: 46.666944444444,
				longitude: 4.3688888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montceau-les-Mines (71306)</span><br />Population : 19855"}
			},
			{
				value: "19775",
				latitude: 43.336111111111,
				longitude: 5.4822222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Allauch (13002)</span><br />Population : 19775"}
			},
			{
				value: "19754",
				latitude: 48.962222222222,
				longitude: 2.0686111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Achères (78005)</span><br />Population : 19754"}
			},
			{
				value: "19714",
				latitude: 49.159722222222,
				longitude: 5.3827777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Verdun (55545)</span><br />Population : 19714"}
			},
			{
				value: "19713",
				latitude: 45.675833333333,
				longitude: 6.3925,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Albertville (73011)</span><br />Population : 19713"}
			},
			{
				value: "19709",
				latitude: 45.741111111111,
				longitude: 3.1963888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cournon-d'Auvergne (63124)</span><br />Population : 19709"}
			},
			{
				value: "19706",
				latitude: 43.41,
				longitude: 5.3094444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Pennes-Mirabeau (13071)</span><br />Population : 19706"}
			},
			{
				value: "19691",
				latitude: 4.905,
				longitude: -52.276388888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Remire-Montjoly (97309)</span><br />Population : 19691"}
			},
			{
				value: "19688",
				latitude: 47.875277777778,
				longitude: -3.9188888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Concarneau (29039)</span><br />Population : 19688"}
			},
			{
				value: "19676",
				latitude: 46.84,
				longitude: -0.48861111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bressuire (79049)</span><br />Population : 19676"}
			},
			{
				value: "19665",
				latitude: 45.043333333333,
				longitude: 3.885,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Puy-en-Velay (43157)</span><br />Population : 19665"}
			},
			{
				value: "19623",
				latitude: 47.911944444444,
				longitude: 1.9711111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Jean-de-Braye (45284)</span><br />Population : 19623"}
			},
			{
				value: "19581",
				latitude: 49.7575,
				longitude: 0.37916666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fécamp (76259)</span><br />Population : 19581"}
			},
			{
				value: "19576",
				latitude: 48.259444444444,
				longitude: 7.4541666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sélestat (67462)</span><br />Population : 19576"}
			},
			{
				value: "19547",
				latitude: 14.615277777778,
				longitude: -60.9025,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le François (97210)</span><br />Population : 19547"}
			},
			{
				value: "19544",
				latitude: 16.0425,
				longitude: -61.564722222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Capesterre-Belle-Eau (97107)</span><br />Population : 19544"}
			},
			{
				value: "19525",
				latitude: 43.919444444444,
				longitude: 5.0513888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">L'Isle-sur-la-Sorgue (84054)</span><br />Population : 19525"}
			},
			{
				value: "19499",
				latitude: 45.888888888889,
				longitude: 6.0961111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Seynod (74268)</span><br />Population : 19499"}
			},
			{
				value: "19489",
				latitude: 43.722777777778,
				longitude: 7.1136111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vence (06157)</span><br />Population : 19489"}
			},
			{
				value: "19418",
				latitude: 48.974166666667,
				longitude: 1.7108333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mantes-la-Ville (78362)</span><br />Population : 19418"}
			},
			{
				value: "19341",
				latitude: 46.845833333333,
				longitude: -1.8791666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Challans (85047)</span><br />Population : 19341"}
			},
			{
				value: "19335",
				latitude: 45.695833333333,
				longitude: -0.32916666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cognac (16102)</span><br />Population : 19335"}
			},
			{
				value: "19304",
				latitude: 48.811111111111,
				longitude: 2.5716666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Plessis-Trévise (94059)</span><br />Population : 19304"}
			},
			{
				value: "19296",
				latitude: 48.993888888889,
				longitude: 2.195,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montigny-lès-Cormeilles (95424)</span><br />Population : 19296"}
			},
			{
				value: "19267",
				latitude: 43.6,
				longitude: 6.9947222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mougins (06085)</span><br />Population : 19267"}
			},
			{
				value: "19265",
				latitude: 43.694166666667,
				longitude: 5.5030555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pertuis (84089)</span><br />Population : 19265"}
			},
			{
				value: "19258",
				latitude: 45.590555555556,
				longitude: 4.7688888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Givors (69091)</span><br />Population : 19258"}
			},
			{
				value: "19227",
				latitude: 46.906111111111,
				longitude: 6.3547222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pontarlier (25462)</span><br />Population : 19227"}
			},
			{
				value: "19155",
				latitude: 49.274722222222,
				longitude: 2.4675,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nogent-sur-Oise (60463)</span><br />Population : 19155"}
			},
			{
				value: "19133",
				latitude: 44.9475,
				longitude: 4.8952777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bourg-lès-Valence (26058)</span><br />Population : 19133"}
			},
			{
				value: "19113",
				latitude: 44.5,
				longitude: 0.16527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marmande (47157)</span><br />Population : 19113"}
			},
			{
				value: "19099",
				latitude: 49.701944444444,
				longitude: 4.9402777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sedan (08409)</span><br />Population : 19099"}
			},
			{
				value: "19014",
				latitude: 48.762777777778,
				longitude: 1.9455555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maurepas (78383)</span><br />Population : 19014"}
			},
			{
				value: "18887",
				latitude: 48.808611111111,
				longitude: 2.1886111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chaville (92022)</span><br />Population : 18887"}
			},
			{
				value: "18861",
				latitude: 47.214722222222,
				longitude: -1.7238888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Couëron (44047)</span><br />Population : 18861"}
			},
			{
				value: "18762",
				latitude: 47.179166666667,
				longitude: -1.6247222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bouguenais (44020)</span><br />Population : 18762"}
			},
			{
				value: "18705",
				latitude: 44.1625,
				longitude: 4.62,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bagnols-sur-Cèze (30028)</span><br />Population : 18705"}
			},
			{
				value: "18703",
				latitude: 45.613333333333,
				longitude: 5.1486111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villefontaine (38553)</span><br />Population : 18703"}
			},
			{
				value: "18684",
				latitude: 45.893611111111,
				longitude: 3.1125,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Riom (63300)</span><br />Population : 18684"}
			},
			{
				value: "18674",
				latitude: 45.627777777778,
				longitude: -1.0255555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Royan (17306)</span><br />Population : 18674"}
			},
			{
				value: "18671",
				latitude: 48.983888888889,
				longitude: 2.6163888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mitry-Mory (77294)</span><br />Population : 18671"}
			},
			{
				value: "18664",
				latitude: 48.705277777778,
				longitude: 2.3161111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chilly-Mazarin (91161)</span><br />Population : 18664"}
			},
			{
				value: "18659",
				latitude: 48.766388888889,
				longitude: 2.3533333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chevilly-Larue (94021)</span><br />Population : 18659"}
			},
			{
				value: "18622",
				latitude: 14.781388888889,
				longitude: -60.993611111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Marie (97228)</span><br />Population : 18622"}
			},
			{
				value: "18591",
				latitude: 47.735833333333,
				longitude: -3.4311111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ploemeur (56162)</span><br />Population : 18591"}
			},
			{
				value: "18568",
				latitude: 48.734444444444,
				longitude: 2.4108333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeneuve-le-Roi (94077)</span><br />Population : 18568"}
			},
			{
				value: "18560",
				latitude: 46.674444444444,
				longitude: 5.5538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lons-le-Saunier (39300)</span><br />Population : 18560"}
			},
			{
				value: "18469",
				latitude: 48.845555555556,
				longitude: 2.1869444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Garches (92033)</span><br />Population : 18469"}
			},
			{
				value: "18413",
				latitude: 45.774444444444,
				longitude: 4.7775,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Écully (69081)</span><br />Population : 18413"}
			},
			{
				value: "18332",
				latitude: 49.215277777778,
				longitude: 1.1655555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Louviers (27375)</span><br />Population : 18332"}
			},
			{
				value: "18275",
				latitude: 47.296944444444,
				longitude: -1.4927777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carquefou (44026)</span><br />Population : 18275"}
			},
			{
				value: "18235",
				latitude: 50.604722222222,
				longitude: 3.0877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ronchin (59507)</span><br />Population : 18235"}
			},
			{
				value: "18227",
				latitude: 48.798333333333,
				longitude: 2.5338888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chennevières-sur-Marne (94019)</span><br />Population : 18227"}
			},
			{
				value: "18220",
				latitude: 44.008333333333,
				longitude: 4.8725,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sorgues (84129)</span><br />Population : 18220"}
			},
			{
				value: "18171",
				latitude: 48.885,
				longitude: 2.4038888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Pré-Saint-Gervais (93061)</span><br />Population : 18171"}
			},
			{
				value: "18065",
				latitude: 45.208611111111,
				longitude: 5.7794444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Meylan (38229)</span><br />Population : 18065"}
			},
			{
				value: "18038",
				latitude: 48.613888888889,
				longitude: 7.7519444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bischheim (67043)</span><br />Population : 18038"}
			},
			{
				value: "17990",
				latitude: 48.821388888889,
				longitude: 2.4727777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Joinville-le-Pont (94042)</span><br />Population : 17990"}
			},
			{
				value: "17976",
				latitude: 48.800277777778,
				longitude: 2.0625,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Cyr-l'École (78545)</span><br />Population : 17976"}
			},
			{
				value: "17969",
				latitude: 44.0925,
				longitude: 6.2355555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Digne-les-Bains (04070)</span><br />Population : 17969"}
			},
			{
				value: "17942",
				latitude: 49.648333333333,
				longitude: -1.6547222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Équeurdreville-Hainneville (50173)</span><br />Population : 17942"}
			},
			{
				value: "17877",
				latitude: 46.060277777778,
				longitude: 6.5786111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cluses (74081)</span><br />Population : 17877"}
			},
			{
				value: "17814",
				latitude: 47.298888888889,
				longitude: -1.5527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Chapelle-sur-Erdre (44035)</span><br />Population : 17814"}
			},
			{
				value: "17773",
				latitude: 48.820555555556,
				longitude: 1.9836111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Clayes-sous-Bois (78165)</span><br />Population : 17773"}
			},
			{
				value: "17758",
				latitude: 47.358333333333,
				longitude: 1.7427777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Romorantin-Lanthenay (41194)</span><br />Population : 17758"}
			},
			{
				value: "17687",
				latitude: 47.792777777778,
				longitude: 1.0655555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vendôme (41269)</span><br />Population : 17687"}
			},
			{
				value: "17683",
				latitude: 45.773611111111,
				longitude: 3.0669444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chamalières (63075)</span><br />Population : 17683"}
			},
			{
				value: "17670",
				latitude: 48.987777777778,
				longitude: 2.2997222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Soisy-sous-Montmorency (95598)</span><br />Population : 17670"}
			},
			{
				value: "17605",
				latitude: 45.903611111111,
				longitude: 6.1038888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cran-Gevrier (74093)</span><br />Population : 17605"}
			},
			{
				value: "17581",
				latitude: 50.598888888889,
				longitude: 3.0736111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Faches-Thumesnil (59220)</span><br />Population : 17581"}
			},
			{
				value: "17546",
				latitude: 43.405,
				longitude: 4.9886111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Port-de-Bouc (13077)</span><br />Population : 17546"}
			},
			{
				value: "17538",
				latitude: 50.655277777778,
				longitude: 3.1877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hem (59299)</span><br />Population : 17538"}
			},
			{
				value: "17452",
				latitude: 49.285833333333,
				longitude: 1.0083333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Elbeuf (76231)</span><br />Population : 17452"}
			},
			{
				value: "17429",
				latitude: 50.409722222222,
				longitude: 2.8327777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Avion (62065)</span><br />Population : 17429"}
			},
			{
				value: "17415",
				latitude: 48.626111111111,
				longitude: 2.5922222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Moissy-Cramayel (77296)</span><br />Population : 17415"}
			},
			{
				value: "17393",
				latitude: 48.123333333333,
				longitude: -1.2094444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vitré (35360)</span><br />Population : 17393"}
			},
			{
				value: "17380",
				latitude: 45.388055555556,
				longitude: 4.2872222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Firminy (42095)</span><br />Population : 17380"}
			},
			{
				value: "17275",
				latitude: 45.24,
				longitude: 4.6708333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Annonay (07010)</span><br />Population : 17275"}
			},
			{
				value: "17275",
				latitude: 50.493055555556,
				longitude: 2.9580555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carvin (62215)</span><br />Population : 17275"}
			},
			{
				value: "17225",
				latitude: 43.149722222222,
				longitude: 6.0741666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Crau (83047)</span><br />Population : 17225"}
			},
			{
				value: "17222",
				latitude: 48.813333333333,
				longitude: 2.3444444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gentilly (94037)</span><br />Population : 17222"}
			},
			{
				value: "17209",
				latitude: 14.575833333333,
				longitude: -60.975833333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ducos (97207)</span><br />Population : 17209"}
			},
			{
				value: "17145",
				latitude: 49.017222222222,
				longitude: 2.0913888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Éragny (95218)</span><br />Population : 17145"}
			},
			{
				value: "17057",
				latitude: 14.670833333333,
				longitude: -61.038055555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Joseph (97224)</span><br />Population : 17057"}
			},
			{
				value: "17019",
				latitude: 48.866944444444,
				longitude: 2.0941666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marly-le-Roi (78372)</span><br />Population : 17019"}
			},
			{
				value: "16951",
				latitude: 47.913055555556,
				longitude: 1.8733333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Jean-de-la-Ruelle (45285)</span><br />Population : 16951"}
			},
			{
				value: "16945",
				latitude: 48.750277777778,
				longitude: 2.5097222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Boissy-Saint-Léger (94004)</span><br />Population : 16945"}
			},
			{
				value: "16934",
				latitude: 47.622222222222,
				longitude: 6.1552777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vesoul (70550)</span><br />Population : 16934"}
			},
			{
				value: "16930",
				latitude: 43.964166666667,
				longitude: 4.86,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Pontet (84092)</span><br />Population : 16930"}
			},
			{
				value: "16926",
				latitude: 48.383055555556,
				longitude: 2.9480555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montereau-Fault-Yonne (77305)</span><br />Population : 16926"}
			},
			{
				value: "16895",
				latitude: 16.331944444444,
				longitude: -61.456944444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Morne-à-l'Eau (97116)</span><br />Population : 16895"}
			},
			{
				value: "16894",
				latitude: 50.448055555556,
				longitude: 3.4269444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Amand-les-Eaux (59526)</span><br />Population : 16894"}
			},
			{
				value: "16888",
				latitude: 48.774166666667,
				longitude: 2.4875,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bonneuil-sur-Marne (94011)</span><br />Population : 16888"}
			},
			{
				value: "16875",
				latitude: 48.024722222222,
				longitude: -1.7458333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bruz (35047)</span><br />Population : 16875"}
			},
			{
				value: "16867",
				latitude: 49.207222222222,
				longitude: 2.5866666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Senlis (60612)</span><br />Population : 16867"}
			},
			{
				value: "16852",
				latitude: 49.546111111111,
				longitude: 0.18805555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montivilliers (76447)</span><br />Population : 16852"}
			},
			{
				value: "16830",
				latitude: 48.771666666667,
				longitude: 5.1672222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bar-le-Duc (55029)</span><br />Population : 16830"}
			},
			{
				value: "16821",
				latitude: 48.896666666667,
				longitude: 2.1061111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Pecq (78481)</span><br />Population : 16821"}
			},
			{
				value: "16802",
				latitude: 44.744444444444,
				longitude: -0.68222222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cestas (33122)</span><br />Population : 16802"}
			},
			{
				value: "16796",
				latitude: 49.010833333333,
				longitude: 2.0386111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Jouy-le-Moutier (95323)</span><br />Population : 16796"}
			},
			{
				value: "16787",
				latitude: 45.708611111111,
				longitude: 4.8533333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Fons (69199)</span><br />Population : 16787"}
			},
			{
				value: "16757",
				latitude: 43.405833333333,
				longitude: 6.0616666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brignoles (83023)</span><br />Population : 16757"}
			},
			{
				value: "16753",
				latitude: 48.893888888889,
				longitude: 2.1322222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Vésinet (78650)</span><br />Population : 16753"}
			},
			{
				value: "16723",
				latitude: 49.104166666667,
				longitude: 6.7080555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Avold (57606)</span><br />Population : 16723"}
			},
			{
				value: "16643",
				latitude: 43.119166666667,
				longitude: 5.8022222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sanary-sur-Mer (83123)</span><br />Population : 16643"}
			},
			{
				value: "16639",
				latitude: 48.5575,
				longitude: 7.6830555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lingolsheim (67267)</span><br />Population : 16639"}
			},
			{
				value: "16623",
				latitude: 47.285833333333,
				longitude: -2.3922222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Baule-Escoublac (44055)</span><br />Population : 16623"}
			},
			{
				value: "16604",
				latitude: 48.6925,
				longitude: 2.6111111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brie-Comte-Robert (77053)</span><br />Population : 16604"}
			},
			{
				value: "16550",
				latitude: 16.241111111111,
				longitude: -61.533055555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pointe-à-Pitre (97120)</span><br />Population : 16550"}
			},
			{
				value: "16547",
				latitude: 48.5775,
				longitude: -3.8277777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Morlaix (29151)</span><br />Population : 16547"}
			},
			{
				value: "16537",
				latitude: 49.059166666667,
				longitude: 2.0625,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Osny (95476)</span><br />Population : 16537"}
			},
			{
				value: "16534",
				latitude: 48.993333333333,
				longitude: 1.7358333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Limay (78335)</span><br />Population : 16534"}
			},
			{
				value: "16504",
				latitude: 43.616388888889,
				longitude: 4.0075,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mauguio (34154)</span><br />Population : 16504"}
			},
			{
				value: "16503",
				latitude: 47.402777777778,
				longitude: 0.67805555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Cyr-sur-Loire (37214)</span><br />Population : 16503"}
			},
			{
				value: "16475",
				latitude: 49.358888888889,
				longitude: 6.1886111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Yutz (57757)</span><br />Population : 16475"}
			},
			{
				value: "16457",
				latitude: 44.836388888889,
				longitude: -0.52583333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Floirac (33167)</span><br />Population : 16457"}
			},
			{
				value: "16450",
				latitude: 43.116388888889,
				longitude: 1.6108333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pamiers (09225)</span><br />Population : 16450"}
			},
			{
				value: "16443",
				latitude: 49.034444444444,
				longitude: 2.0319444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vauréal (95637)</span><br />Population : 16443"}
			},
			{
				value: "16442",
				latitude: 43.565555555556,
				longitude: 1.2963888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Plaisance-du-Touch (31424)</span><br />Population : 16442"}
			},
			{
				value: "16377",
				latitude: 49.640833333333,
				longitude: -1.5788888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tourlaville (50602)</span><br />Population : 16377"}
			},
			{
				value: "16363",
				latitude: 50.363055555556,
				longitude: 3.1130555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sin-le-Noble (59569)</span><br />Population : 16363"}
			},
			{
				value: "16355",
				latitude: 45.231666666667,
				longitude: 5.6830555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Égrève (38382)</span><br />Population : 16355"}
			},
			{
				value: "16263",
				latitude: 47.328055555556,
				longitude: -2.4291666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guérande (44069)</span><br />Population : 16263"}
			},
			{
				value: "16262",
				latitude: 48.438333333333,
				longitude: 1.465,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lucé (28218)</span><br />Population : 16262"}
			},
			{
				value: "16249",
				latitude: 47.699722222222,
				longitude: -0.076111111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Flèche (72154)</span><br />Population : 16249"}
			},
			{
				value: "16231",
				latitude: 48.698055555556,
				longitude: 2.1875,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Orsay (91471)</span><br />Population : 16231"}
			},
			{
				value: "16224",
				latitude: 48.8,
				longitude: 2.1722222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Viroflay (78686)</span><br />Population : 16224"}
			},
			{
				value: "16191",
				latitude: 16.271666666667,
				longitude: -61.632777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lamentin (97115)</span><br />Population : 16191"}
			},
			{
				value: "16184",
				latitude: 45.936388888889,
				longitude: 6.6319444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sallanches (74256)</span><br />Population : 16184"}
			},
			{
				value: "16183",
				latitude: 43.807222222222,
				longitude: 4.6433333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Beaucaire (30032)</span><br />Population : 16183"}
			},
			{
				value: "16166",
				latitude: 43.568888888889,
				longitude: 3.9086111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lattes (34129)</span><br />Population : 16166"}
			},
			{
				value: "16080",
				latitude: 48.675,
				longitude: 5.8916666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Toul (54528)</span><br />Population : 16080"}
			},
			{
				value: "16042",
				latitude: 43.537777777778,
				longitude: 1.3436111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cugnaux (31157)</span><br />Population : 16042"}
			},
			{
				value: "15980",
				latitude: 45.619444444444,
				longitude: 5.2330555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">L'Isle-d'Abeau (38193)</span><br />Population : 15980"}
			},
			{
				value: "15975",
				latitude: 48.120833333333,
				longitude: -1.6036111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cesson-Sévigné (35051)</span><br />Population : 15975"}
			},
			{
				value: "15903",
				latitude: 48.450833333333,
				longitude: -4.2494444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Landerneau (29103)</span><br />Population : 15903"}
			},
			{
				value: "15899",
				latitude: 45.6075,
				longitude: 4.0652777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montbrison (42147)</span><br />Population : 15899"}
			},
			{
				value: "15838",
				latitude: 45.265833333333,
				longitude: 1.7722222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tulle (19272)</span><br />Population : 15838"}
			},
			{
				value: "15837",
				latitude: 48.748333333333,
				longitude: -0.56944444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Flers (61169)</span><br />Population : 15837"}
			},
			{
				value: "15835",
				latitude: 49.329722222222,
				longitude: 6.0619444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hayange (57306)</span><br />Population : 15835"}
			},
			{
				value: "15830",
				latitude: 48.7475,
				longitude: 2.2627777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Verrières-le-Buisson (91645)</span><br />Population : 15830"}
			},
			{
				value: "15825",
				latitude: 48.841111111111,
				longitude: 2.5222222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bry-sur-Marne (94015)</span><br />Population : 15825"}
			},
			{
				value: "15802",
				latitude: 43.358611111111,
				longitude: -1.7744444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hendaye (64260)</span><br />Population : 15802"}
			},
			{
				value: "15783",
				latitude: 50.408333333333,
				longitude: 1.5927777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Berck (62108)</span><br />Population : 15783"}
			},
			{
				value: "15782",
				latitude: 48.854722222222,
				longitude: 2.6288888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Noisiel (77337)</span><br />Population : 15782"}
			},
			{
				value: "15727",
				latitude: 46.871111111111,
				longitude: -1.0136111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Herbiers (85109)</span><br />Population : 15727"}
			},
			{
				value: "15665",
				latitude: 48.408888888889,
				longitude: 2.7016666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fontainebleau (77186)</span><br />Population : 15665"}
			},
			{
				value: "15662",
				latitude: 43.436388888889,
				longitude: 4.9452777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fos-sur-Mer (13039)</span><br />Population : 15662"}
			},
			{
				value: "15651",
				latitude: 47.390833333333,
				longitude: 0.72805555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Pierre-des-Corps (37233)</span><br />Population : 15651"}
			},
			{
				value: "15630",
				latitude: 46.951111111111,
				longitude: 4.2986111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Autun (71014)</span><br />Population : 15630"}
			},
			{
				value: "15614",
				latitude: 48.908055555556,
				longitude: 2.1780555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carrières-sur-Seine (78124)</span><br />Population : 15614"}
			},
			{
				value: "15583",
				latitude: 47.996944444444,
				longitude: 2.7325,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montargis (45208)</span><br />Population : 15583"}
			},
			{
				value: "15581",
				latitude: 48.979722222222,
				longitude: 1.9738888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Verneuil-sur-Seine (78642)</span><br />Population : 15581"}
			},
			{
				value: "15545",
				latitude: 47.804166666667,
				longitude: -3.2788888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hennebont (56083)</span><br />Population : 15545"}
			},
			{
				value: "15540",
				latitude: 48.092222222222,
				longitude: -4.3302777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Douarnenez (29046)</span><br />Population : 15540"}
			},
			{
				value: "15508",
				latitude: 44.910555555556,
				longitude: -0.6375,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Blanquefort (33056)</span><br />Population : 15508"}
			},
			{
				value: "15423",
				latitude: 47.951388888889,
				longitude: 1.8802777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saran (45302)</span><br />Population : 15423"}
			},
			{
				value: "15412",
				latitude: 48.908611111111,
				longitude: 2.1494444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montesson (78418)</span><br />Population : 15412"}
			},
			{
				value: "15389",
				latitude: 48.947777777778,
				longitude: 2.0386111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carrières-sous-Poissy (78123)</span><br />Population : 15389"}
			},
			{
				value: "15326",
				latitude: 43.636111111111,
				longitude: 3.9013888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Castelnau-le-Lez (34057)</span><br />Population : 15326"}
			},
			{
				value: "15281",
				latitude: 49.440277777778,
				longitude: 1.0252777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Canteleu (76157)</span><br />Population : 15281"}
			},
			{
				value: "15258",
				latitude: 43.658055555556,
				longitude: 7.1213888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeneuve-Loubet (06161)</span><br />Population : 15258"}
			},
			{
				value: "15254",
				latitude: 47.688888888889,
				longitude: 2.6294444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gien (45155)</span><br />Population : 15254"}
			},
			{
				value: "15231",
				latitude: 50.748333333333,
				longitude: 2.2608333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Omer (62765)</span><br />Population : 15231"}
			},
			{
				value: "15153",
				latitude: 45.529444444444,
				longitude: 4.6169444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rive-de-Gier (42186)</span><br />Population : 15153"}
			},
			{
				value: "15139",
				latitude: 48.685555555556,
				longitude: 6.1522222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Laxou (54304)</span><br />Population : 15139"}
			},
			{
				value: "15102",
				latitude: 43.095,
				longitude: -0.045277777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lourdes (65286)</span><br />Population : 15102"}
			},
			{
				value: "15094",
				latitude: 47.482777777778,
				longitude: 6.8397222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Audincourt (25031)</span><br />Population : 15094"}
			},
			{
				value: "15082",
				latitude: 44.882777777778,
				longitude: -0.6125,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bruges (33075)</span><br />Population : 15082"}
			},
			{
				value: "15082",
				latitude: 48.744444444444,
				longitude: -0.020277777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Argentan (61006)</span><br />Population : 15082"}
			},
			{
				value: "15079",
				latitude: 43.8825,
				longitude: 4.855,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châteaurenard (13027)</span><br />Population : 15079"}
			},
			{
				value: "15075",
				latitude: 49.0275,
				longitude: 2.3266666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Domont (95199)</span><br />Population : 15075"}
			},
			{
				value: "15043",
				latitude: 46.466944444444,
				longitude: -0.80638888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fontenay-le-Comte (85092)</span><br />Population : 15043"}
			},
			{
				value: "15020",
				latitude: 49.046388888889,
				longitude: 3.4030555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Château-Thierry (02168)</span><br />Population : 15020"}
			},
			{
				value: "14998",
				latitude: 16.251388888889,
				longitude: -61.273888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-François (97125)</span><br />Population : 14998"}
			},
			{
				value: "14962",
				latitude: 49.016944444444,
				longitude: 2.2463888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Leu-la-Forêt (95563)</span><br />Population : 14962"}
			},
			{
				value: "14943",
				latitude: 48.934444444444,
				longitude: 2.4244444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Bourget (93013)</span><br />Population : 14943"}
			},
			{
				value: "14920",
				latitude: 48.815555555556,
				longitude: 3.0836111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Coulommiers (77131)</span><br />Population : 14920"}
			},
			{
				value: "14907",
				latitude: 43.453333333333,
				longitude: 5.8619444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Maximin-la-Sainte-Baume (83116)</span><br />Population : 14907"}
			},
			{
				value: "14903",
				latitude: 47.782222222222,
				longitude: 7.3480555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Illzach (68154)</span><br />Population : 14903"}
			},
			{
				value: "14888",
				latitude: 46.496388888889,
				longitude: -1.7847222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Sables-d'Olonne (85194)</span><br />Population : 14888"}
			},
			{
				value: "14860",
				latitude: 48.068611111111,
				longitude: -2.9627777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pontivy (56178)</span><br />Population : 14860"}
			},
			{
				value: "14832",
				latitude: 48.904444444444,
				longitude: 6.0541666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pont-à-Mousson (54431)</span><br />Population : 14832"}
			},
			{
				value: "14772",
				latitude: 50.7375,
				longitude: 2.7338888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bailleul (59043)</span><br />Population : 14772"}
			},
			{
				value: "14756",
				latitude: 48.688333333333,
				longitude: 2.3775,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Juvisy-sur-Orge (91326)</span><br />Population : 14756"}
			},
			{
				value: "14753",
				latitude: 48.673055555556,
				longitude: 6.1547222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villers-lès-Nancy (54578)</span><br />Population : 14753"}
			},
			{
				value: "14717",
				latitude: 50.703888888889,
				longitude: 1.5938888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Outreau (62643)</span><br />Population : 14717"}
			},
			{
				value: "14707",
				latitude: 49.519722222222,
				longitude: 5.7605555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Longwy (54323)</span><br />Population : 14707"}
			},
			{
				value: "14697",
				latitude: 48.836111111111,
				longitude: 2.6277777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lognes (77258)</span><br />Population : 14697"}
			},
			{
				value: "14647",
				latitude: 48.818333333333,
				longitude: 2.4347222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Maurice (94069)</span><br />Population : 14647"}
			},
			{
				value: "14632",
				latitude: 50.125,
				longitude: 3.4116666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Caudry (59139)</span><br />Population : 14632"}
			},
			{
				value: "14577",
				latitude: 46.170555555556,
				longitude: 1.8683333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guéret (23096)</span><br />Population : 14577"}
			},
			{
				value: "14569",
				latitude: 50.609166666667,
				longitude: 2.9869444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haubourdin (59286)</span><br />Population : 14569"}
			},
			{
				value: "14487",
				latitude: 48.998611111111,
				longitude: 2.3569444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Brice-sous-Forêt (95539)</span><br />Population : 14487"}
			},
			{
				value: "14475",
				latitude: 45.544166666667,
				longitude: 3.2488888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Issoire (63178)</span><br />Population : 14475"}
			},
			{
				value: "14450",
				latitude: 47.115555555556,
				longitude: -2.1033333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pornic (44131)</span><br />Population : 14450"}
			},
			{
				value: "14425",
				latitude: 45.499444444444,
				longitude: 4.24,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Just-Saint-Rambert (42279)</span><br />Population : 14425"}
			},
			{
				value: "14423",
				latitude: 48.973611111111,
				longitude: 2.3458333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montmagny (95427)</span><br />Population : 14423"}
			},
			{
				value: "14403",
				latitude: 47.8075,
				longitude: 7.3369444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Wittenheim (68376)</span><br />Population : 14403"}
			},
			{
				value: "14393",
				latitude: 48.534444444444,
				longitude: -2.7708333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Plérin (22187)</span><br />Population : 14393"}
			},
			{
				value: "14375",
				latitude: 47.366666666667,
				longitude: 0.72666666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Avertin (37208)</span><br />Population : 14375"}
			},
			{
				value: "14364",
				latitude: 49.234444444444,
				longitude: 2.8875,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Crépy-en-Valois (60176)</span><br />Population : 14364"}
			},
			{
				value: "14358",
				latitude: 50.248055555556,
				longitude: 3.9244444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hautmont (59291)</span><br />Population : 14358"}
			},
			{
				value: "14320",
				latitude: 49.655833333333,
				longitude: 3.2872222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tergnier (02738)</span><br />Population : 14320"}
			},
			{
				value: "14316",
				latitude: 45.958055555556,
				longitude: 5.3577777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ambérieu-en-Bugey (01004)</span><br />Population : 14316"}
			},
			{
				value: "14316",
				latitude: 46.536111111111,
				longitude: -1.7727777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Olonne-sur-Mer (85166)</span><br />Population : 14316"}
			},
			{
				value: "14287",
				latitude: 48.408888888889,
				longitude: 2.725,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Avon (77014)</span><br />Population : 14287"}
			},
			{
				value: "14264",
				latitude: 48.303055555556,
				longitude: -0.61361111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mayenne (53147)</span><br />Population : 14264"}
			},
			{
				value: "14233",
				latitude: 47.291111111111,
				longitude: 5.0072222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chenôve (21166)</span><br />Population : 14233"}
			},
			{
				value: "14194",
				latitude: 48.899166666667,
				longitude: 2.5230555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Raincy (93062)</span><br />Population : 14194"}
			},
			{
				value: "14092",
				latitude: 44.280277777778,
				longitude: 4.7488888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bollène (84019)</span><br />Population : 14092"}
			},
			{
				value: "14035",
				latitude: 48.070833333333,
				longitude: 1.3377777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châteaudun (28088)</span><br />Population : 14035"}
			},
			{
				value: "14028",
				latitude: 43.454444444444,
				longitude: 5.4144444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bouc-Bel-Air (13015)</span><br />Population : 14028"}
			},
			{
				value: "13968",
				latitude: 48.618055555556,
				longitude: 2.4069444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Courcouronnes (91182)</span><br />Population : 13968"}
			},
			{
				value: "13965",
				latitude: 14.738611111111,
				longitude: -60.963055555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Trinité (97230)</span><br />Population : 13965"}
			},
			{
				value: "13907",
				latitude: 49.581111111111,
				longitude: 2.9988888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Noyon (60471)</span><br />Population : 13907"}
			},
			{
				value: "13892",
				latitude: 45.866111111111,
				longitude: 5.9444444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rumilly (74225)</span><br />Population : 13892"}
			},
			{
				value: "13880",
				latitude: 48.801388888889,
				longitude: 2.0316666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bois-d'Arcy (78073)</span><br />Population : 13880"}
			},
			{
				value: "13873",
				latitude: 46.134444444444,
				longitude: 3.4563888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cusset (03095)</span><br />Population : 13873"}
			},
			{
				value: "13845",
				latitude: 48.433611111111,
				longitude: -4.4008333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guipavas (29075)</span><br />Population : 13845"}
			},
			{
				value: "13832",
				latitude: 43.610277777778,
				longitude: 1.4986111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Balma (31044)</span><br />Population : 13832"}
			},
			{
				value: "13826",
				latitude: 48.724722222222,
				longitude: 4.5844444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vitry-le-François (51649)</span><br />Population : 13826"}
			},
			{
				value: "13802",
				latitude: 46.504166666667,
				longitude: -1.7372222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Château-d'Olonne (85060)</span><br />Population : 13802"}
			},
			{
				value: "13774",
				latitude: 48.515833333333,
				longitude: 3.7266666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Romilly-sur-Seine (10323)</span><br />Population : 13774"}
			},
			{
				value: "13770",
				latitude: 49.205277777778,
				longitude: 6.6958333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Creutzwald (57160)</span><br />Population : 13770"}
			},
			{
				value: "13767",
				latitude: 43.677777777778,
				longitude: 4.4311111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Gilles (30258)</span><br />Population : 13767"}
			},
			{
				value: "13752",
				latitude: 50.703333333333,
				longitude: 3.1405555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mouvaux (59421)</span><br />Population : 13752"}
			},
			{
				value: "13723",
				latitude: 48.838055555556,
				longitude: -1.5869444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Granville (50218)</span><br />Population : 13723"}
			},
			{
				value: "13710",
				latitude: 48.565277777778,
				longitude: 2.4361111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mennecy (91386)</span><br />Population : 13710"}
			},
			{
				value: "13702",
				latitude: 49.278611111111,
				longitude: -0.70388888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bayeux (14047)</span><br />Population : 13702"}
			},
			{
				value: "13696",
				latitude: 43.475555555556,
				longitude: 5.1680555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Berre-l'Étang (13014)</span><br />Population : 13696"}
			},
			{
				value: "13688",
				latitude: 49.274444444444,
				longitude: 1.2102777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Val-de-Reuil (27701)</span><br />Population : 13688"}
			},
			{
				value: "13684",
				latitude: 43.741944444444,
				longitude: 7.4236111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Beausoleil (06012)</span><br />Population : 13684"}
			},
			{
				value: "13659",
				latitude: -21.266111111111,
				longitude: 55.366944444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">L'Étang-Salé (97404)</span><br />Population : 13659"}
			},
			{
				value: "13656",
				latitude: 48.987222222222,
				longitude: 2.4166666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arnouville (95019)</span><br />Population : 13656"}
			},
			{
				value: "13639",
				latitude: 50.371388888889,
				longitude: 3.5044444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Anzin (59014)</span><br />Population : 13639"}
			},
			{
				value: "13587",
				latitude: 48.3725,
				longitude: -4.3705555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Plougastel-Daoulas (29189)</span><br />Population : 13587"}
			},
			{
				value: "13558",
				latitude: 43.900555555556,
				longitude: 1.8983333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gaillac (81099)</span><br />Population : 13558"}
			},
			{
				value: "13545",
				latitude: 46.565833333333,
				longitude: 3.3544444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Yzeure (03321)</span><br />Population : 13545"}
			},
			{
				value: "13528",
				latitude: 42.705555555556,
				longitude: 3.0072222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Canet-en-Roussillon (66037)</span><br />Population : 13528"}
			},
			{
				value: "13511",
				latitude: 44.924722222222,
				longitude: -0.48666666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ambarès-et-Lagrave (33003)</span><br />Population : 13511"}
			},
			{
				value: "13481",
				latitude: 49.141666666667,
				longitude: 6.7988888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Freyming-Merlebach (57240)</span><br />Population : 13481"}
			},
			{
				value: "13473",
				latitude: 49.235833333333,
				longitude: 2.135,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Méru (60395)</span><br />Population : 13473"}
			},
			{
				value: "13452",
				latitude: 46.948055555556,
				longitude: 1.9933333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Issoudun (36088)</span><br />Population : 13452"}
			},
			{
				value: "13448",
				latitude: 43.390277777778,
				longitude: -1.6597222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Jean-de-Luz (64483)</span><br />Population : 13448"}
			},
			{
				value: "13439",
				latitude: 43.3025,
				longitude: -0.39722222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Billère (64129)</span><br />Population : 13439"}
			},
			{
				value: "13436",
				latitude: 48.311944444444,
				longitude: 4.0444444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Chapelle-Saint-Luc (10081)</span><br />Population : 13436"}
			},
			{
				value: "13427",
				latitude: 50.585,
				longitude: 3.0430555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Wattignies (59648)</span><br />Population : 13427"}
			},
			{
				value: "13426",
				latitude: 43.805,
				longitude: 4.6594444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tarascon (13108)</span><br />Population : 13426"}
			},
			{
				value: "13398",
				latitude: 48.011666666667,
				longitude: 2.7358333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châlette-sur-Loing (45068)</span><br />Population : 13398"}
			},
			{
				value: "13337",
				latitude: 44.3775,
				longitude: 4.6961111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pierrelatte (26235)</span><br />Population : 13337"}
			},
			{
				value: "13325",
				latitude: 14.486666666667,
				longitude: -60.903333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rivière-Pilote (97220)</span><br />Population : 13325"}
			},
			{
				value: "13251",
				latitude: 47.748611111111,
				longitude: 7.4044444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rixheim (68278)</span><br />Population : 13251"}
			},
			{
				value: "13249",
				latitude: 44.04,
				longitude: 1.1069444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Castelsarrasin (82033)</span><br />Population : 13249"}
			},
			{
				value: "13242",
				latitude: 47.411388888889,
				longitude: 0.9825,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Amboise (37003)</span><br />Population : 13242"}
			},
			{
				value: "13220",
				latitude: 43.308888888889,
				longitude: 6.6377777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Maxime (83115)</span><br />Population : 13220"}
			},
			{
				value: "13213",
				latitude: 44.518333333333,
				longitude: 3.5005555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mende (48095)</span><br />Population : 13213"}
			},
			{
				value: "13203",
				latitude: 49.151111111111,
				longitude: 6.1513888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Woippy (57751)</span><br />Population : 13203"}
			},
			{
				value: "13159",
				latitude: 45.736388888889,
				longitude: 4.7636111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Francheville (69089)</span><br />Population : 13159"}
			},
			{
				value: "13125",
				latitude: 43.443333333333,
				longitude: 6.6377777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roquebrune-sur-Argens (83107)</span><br />Population : 13125"}
			},
			{
				value: "13068",
				latitude: 47.791388888889,
				longitude: 7.3380555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Kingersheim (68166)</span><br />Population : 13068"}
			},
			{
				value: "13067",
				latitude: 50.671388888889,
				longitude: 3.2144444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lys-lez-Lannoy (59367)</span><br />Population : 13067"}
			},
			{
				value: "13040",
				latitude: 14.528888888889,
				longitude: -60.981388888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rivière-Salée (97221)</span><br />Population : 13040"}
			},
			{
				value: "13037",
				latitude: 43.139444444444,
				longitude: 5.8469444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ollioules (83090)</span><br />Population : 13037"}
			},
			{
				value: "13023",
				latitude: 45.396111111111,
				longitude: 4.325,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Chambon-Feugerolles (42044)</span><br />Population : 13023"}
			},
			{
				value: "13016",
				latitude: 50.753611111111,
				longitude: 3.1202777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roncq (59508)</span><br />Population : 13016"}
			},
			{
				value: "12989",
				latitude: 47.84,
				longitude: -0.33416666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sablé-sur-Sarthe (72264)</span><br />Population : 12989"}
			},
			{
				value: "12951",
				latitude: 47.506944444444,
				longitude: -0.58888888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Avrillé (49015)</span><br />Population : 12951"}
			},
			{
				value: "12941",
				latitude: 50.017222222222,
				longitude: 4.0533333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fourmies (59249)</span><br />Population : 12941"}
			},
			{
				value: "12907",
				latitude: 48.268611111111,
				longitude: 2.6936111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nemours (77333)</span><br />Population : 12907"}
			},
			{
				value: "12904",
				latitude: 43.725555555556,
				longitude: -1.0527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Paul-lès-Dax (40279)</span><br />Population : 12904"}
			},
			{
				value: "12886",
				latitude: 48.734722222222,
				longitude: 7.0538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sarrebourg (57630)</span><br />Population : 12886"}
			},
			{
				value: "12881",
				latitude: 44.3525,
				longitude: 2.0341666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villefranche-de-Rouergue (12300)</span><br />Population : 12881"}
			},
			{
				value: "12872",
				latitude: 43.966388888889,
				longitude: 4.7958333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villeneuve-lès-Avignon (30351)</span><br />Population : 12872"}
			},
			{
				value: "12865",
				latitude: 48.813611111111,
				longitude: 2.0486111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fontenay-le-Fleury (78242)</span><br />Population : 12865"}
			},
			{
				value: "12860",
				latitude: 50.389166666667,
				longitude: 3.4858333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Raismes (59491)</span><br />Population : 12860"}
			},
			{
				value: "12829",
				latitude: 49.299166666667,
				longitude: 6.1097222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fameck (57206)</span><br />Population : 12829"}
			},
			{
				value: "12803",
				latitude: 43.641388888889,
				longitude: 7.0088888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Valbonne (06152)</span><br />Population : 12803"}
			},
			{
				value: "12800",
				latitude: 48.766388888889,
				longitude: 7.8569444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bischwiller (67046)</span><br />Population : 12800"}
			},
			{
				value: "12700",
				latitude: 43.757222222222,
				longitude: 7.4741666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roquebrune-Cap-Martin (06104)</span><br />Population : 12700"}
			},
			{
				value: "12695",
				latitude: 47.667777777778,
				longitude: -2.9825,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Auray (56007)</span><br />Population : 12695"}
			},
			{
				value: "12684",
				latitude: 48.558888888889,
				longitude: 3.2994444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Provins (77379)</span><br />Population : 12684"}
			},
			{
				value: "12662",
				latitude: 48.964444444444,
				longitude: 2.3441666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villetaneuse (93079)</span><br />Population : 12662"}
			},
			{
				value: "12661",
				latitude: 49.255555555556,
				longitude: 2.4383333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montataire (60414)</span><br />Population : 12661"}
			},
			{
				value: "12661",
				latitude: 47.748333333333,
				longitude: 7.3669444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Riedisheim (68271)</span><br />Population : 12661"}
			},
			{
				value: "12638",
				latitude: 48.838611111111,
				longitude: -0.88916666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vire (14762)</span><br />Population : 12638"}
			},
			{
				value: "12630",
				latitude: 47.716944444444,
				longitude: -1.3761111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châteaubriant (44036)</span><br />Population : 12630"}
			},
			{
				value: "12620",
				latitude: 44.104722222222,
				longitude: 1.0852777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Moissac (82112)</span><br />Population : 12620"}
			},
			{
				value: "12609",
				latitude: 49.2,
				longitude: 6.9291666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Stiring-Wendel (57660)</span><br />Population : 12609"}
			},
			{
				value: "12602",
				latitude: 50.3575,
				longitude: 3.2802777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Somain (59574)</span><br />Population : 12602"}
			},
			{
				value: "12602",
				latitude: 48.532777777778,
				longitude: 2.5447222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Fargeau-Ponthierry (77407)</span><br />Population : 12602"}
			},
			{
				value: "12571",
				latitude: 47.446111111111,
				longitude: -0.46638888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Trélazé (49353)</span><br />Population : 12571"}
			},
			{
				value: "12564",
				latitude: 43.315,
				longitude: -0.41083333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lons (64348)</span><br />Population : 12564"}
			},
			{
				value: "12539",
				latitude: 48.468611111111,
				longitude: -2.5177777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lamballe (22093)</span><br />Population : 12539"}
			},
			{
				value: "12521",
				latitude: 47.246388888889,
				longitude: -2.1669444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Brevin-les-Pins (44154)</span><br />Population : 12521"}
			},
			{
				value: "12492",
				latitude: 44.393055555556,
				longitude: -1.1638888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Biscarrosse (40046)</span><br />Population : 12492"}
			},
			{
				value: "12469",
				latitude: 50.761111111111,
				longitude: 3.0077777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Comines (59152)</span><br />Population : 12469"}
			},
			{
				value: "12469",
				latitude: 50.441944444444,
				longitude: 2.7244444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bully-les-Mines (62186)</span><br />Population : 12469"}
			},
			{
				value: "12459",
				latitude: 48.874166666667,
				longitude: 2.6380555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vaires-sur-Marne (77479)</span><br />Population : 12459"}
			},
			{
				value: "12451",
				latitude: 50.445,
				longitude: 2.9058333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Harnes (62413)</span><br />Population : 12451"}
			},
			{
				value: "12443",
				latitude: 47.872777777778,
				longitude: -3.5497222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Quimperlé (29233)</span><br />Population : 12443"}
			},
			{
				value: "12429",
				latitude: 50.548333333333,
				longitude: 3.0294444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Seclin (59560)</span><br />Population : 12429"}
			},
			{
				value: "12420",
				latitude: 49.615555555556,
				longitude: 3.2191666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chauny (02173)</span><br />Population : 12420"}
			},
			{
				value: "12413",
				latitude: 50.398333333333,
				longitude: 3.5394444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bruay-sur-l'Escaut (59112)</span><br />Population : 12413"}
			},
			{
				value: "12371",
				latitude: 49.544444444444,
				longitude: 0.95361111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Barentin (76057)</span><br />Population : 12371"}
			},
			{
				value: "12354",
				latitude: 48.741388888889,
				longitude: 7.3619444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saverne (67437)</span><br />Population : 12354"}
			},
			{
				value: "12340",
				latitude: 45.731388888889,
				longitude: 5.0022222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Genas (69277)</span><br />Population : 12340"}
			},
			{
				value: "12328",
				latitude: 49.616944444444,
				longitude: 0.75305555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Yvetot (76758)</span><br />Population : 12328"}
			},
			{
				value: "12327",
				latitude: 43.546111111111,
				longitude: 1.4755555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ramonville-Saint-Agne (31446)</span><br />Population : 12327"}
			},
			{
				value: "12327",
				latitude: 48.980833333333,
				longitude: 2.0583333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Andrésy (78015)</span><br />Population : 12327"}
			},
			{
				value: "12321",
				latitude: 46.078888888889,
				longitude: 6.4008333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bonneville (74042)</span><br />Population : 12321"}
			},
			{
				value: "12317",
				latitude: 50.479722222222,
				longitude: 2.6647222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nœux-les-Mines (62617)</span><br />Population : 12317"}
			},
			{
				value: "12293",
				latitude: 45.181388888889,
				longitude: 5.6991666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Seyssinet-Pariset (38485)</span><br />Population : 12293"}
			},
			{
				value: "12248",
				latitude: 48.706388888889,
				longitude: 2.3347222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Morangis (91432)</span><br />Population : 12248"}
			},
			{
				value: "12246",
				latitude: 48.693055555556,
				longitude: 2.5158333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Épinay-sous-Sénart (91215)</span><br />Population : 12246"}
			},
			{
				value: "12240",
				latitude: 47.424444444444,
				longitude: -0.52527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Ponts-de-Cé (49246)</span><br />Population : 12240"}
			},
			{
				value: "12237",
				latitude: 47.973055555556,
				longitude: 2.7702777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Amilly (45004)</span><br />Population : 12237"}
			},
			{
				value: "12228",
				latitude: 48.745,
				longitude: 2.4672222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Valenton (94074)</span><br />Population : 12228"}
			},
			{
				value: "12220",
				latitude: 43.318055555556,
				longitude: 1.9538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Castelnaudary (11076)</span><br />Population : 12220"}
			},
			{
				value: "12205",
				latitude: 44.619722222222,
				longitude: 4.3902777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aubenas (07019)</span><br />Population : 12205"}
			},
			{
				value: "12200",
				latitude: 43.760833333333,
				longitude: 1.9886111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Graulhet (81105)</span><br />Population : 12200"}
			},
			{
				value: "12187",
				latitude: 47.249444444444,
				longitude: -1.4866666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Luce-sur-Loire (44172)</span><br />Population : 12187"}
			},
			{
				value: "12161",
				latitude: 46.1075,
				longitude: 5.8258333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bellegarde-sur-Valserine (01033)</span><br />Population : 12161"}
			},
			{
				value: "12145",
				latitude: 15.996944444444,
				longitude: -61.732777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Basse-Terre (97105)</span><br />Population : 12145"}
			},
			{
				value: "12143",
				latitude: 47.828611111111,
				longitude: -0.7027777777777801,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Château-Gontier (53062)</span><br />Population : 12143"}
			},
			{
				value: "12141",
				latitude: 43.540555555556,
				longitude: -1.4613888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tarnos (40312)</span><br />Population : 12141"}
			},
			{
				value: "12125",
				latitude: 46.144166666667,
				longitude: 6.0841666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Julien-en-Genevois (74243)</span><br />Population : 12125"}
			},
			{
				value: "12122",
				latitude: 48.758333333333,
				longitude: 2.0508333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Voisins-le-Bretonneux (78688)</span><br />Population : 12122"}
			},
			{
				value: "12094",
				latitude: 44.895833333333,
				longitude: 6.635,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Briançon (05023)</span><br />Population : 12094"}
			},
			{
				value: "12093",
				latitude: 43.656388888889,
				longitude: 1.4844444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">L'Union (31561)</span><br />Population : 12093"}
			},
			{
				value: "12092",
				latitude: 48.958333333333,
				longitude: 1.855,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aubergenville (78029)</span><br />Population : 12092"}
			},
			{
				value: "12064",
				latitude: 43.876111111111,
				longitude: 5.3963888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Apt (84003)</span><br />Population : 12064"}
			},
			{
				value: "12057",
				latitude: 50.402222222222,
				longitude: 2.8658333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Méricourt (62570)</span><br />Population : 12057"}
			},
			{
				value: "12012",
				latitude: 48.382222222222,
				longitude: -4.6202777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Plouzané (29212)</span><br />Population : 12012"}
			},
			{
				value: "11979",
				latitude: 49.111111111111,
				longitude: 2.2227777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">L'Isle-Adam (95313)</span><br />Population : 11979"}
			},
			{
				value: "11972",
				latitude: 43.183611111111,
				longitude: 5.7086111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Cyr-sur-Mer (83112)</span><br />Population : 11972"}
			},
			{
				value: "11959",
				latitude: 48.969722222222,
				longitude: 2.3080555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Enghien-les-Bains (95210)</span><br />Population : 11959"}
			},
			{
				value: "11958",
				latitude: 50.348888888889,
				longitude: 3.5441666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marly (59383)</span><br />Population : 11958"}
			},
			{
				value: "11948",
				latitude: 49.301111111111,
				longitude: 2.6036111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pont-Sainte-Maxence (60509)</span><br />Population : 11948"}
			},
			{
				value: "11941",
				latitude: 49.572222222222,
				longitude: 0.4725,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bolbec (76114)</span><br />Population : 11941"}
			},
			{
				value: "11931",
				latitude: 45.663055555556,
				longitude: 4.9530555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mions (69283)</span><br />Population : 11931"}
			},
			{
				value: "11928",
				latitude: 43.487777777778,
				longitude: 5.2322222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rognac (13081)</span><br />Population : 11928"}
			},
			{
				value: "11917",
				latitude: 45.923611111111,
				longitude: 6.6863888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Passy (74208)</span><br />Population : 11917"}
			},
			{
				value: "11917",
				latitude: 45.923611111111,
				longitude: 6.6863888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Passy (74208)</span><br />Population : 11917"}
			},
			{
				value: "11881",
				latitude: 48.720833333333,
				longitude: 1.3605555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vernouillet (28404)</span><br />Population : 11881"}
			},
			{
				value: "11870",
				latitude: 43.369444444444,
				longitude: 5.6313888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Auriol (13007)</span><br />Population : 11870"}
			},
			{
				value: "11868",
				latitude: 50.986388888889,
				longitude: 2.1275,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gravelines (59273)</span><br />Population : 11868"}
			},
			{
				value: "11864",
				latitude: 49.280555555556,
				longitude: 1.7763888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gisors (27284)</span><br />Population : 11864"}
			},
			{
				value: "11860",
				latitude: -20.995277777778,
				longitude: 55.676111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bras-Panon (97402)</span><br />Population : 11860"}
			},
			{
				value: "11831",
				latitude: 45.887222222222,
				longitude: 0.90111111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Junien (87154)</span><br />Population : 11831"}
			},
			{
				value: "11830",
				latitude: 43.105555555556,
				longitude: 6.0233333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Pradet (83098)</span><br />Population : 11830"}
			},
			{
				value: "11796",
				latitude: 43.383055555556,
				longitude: 5.1641666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Châteauneuf-les-Martigues (13026)</span><br />Population : 11796"}
			},
			{
				value: "11777",
				latitude: 48.980833333333,
				longitude: 2.0061111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Triel-sur-Seine (78624)</span><br />Population : 11777"}
			},
			{
				value: "11757",
				latitude: 47.9075,
				longitude: 7.2102777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guebwiller (68112)</span><br />Population : 11757"}
			},
			{
				value: "11753",
				latitude: 43.108055555556,
				longitude: 0.7233333333333301,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Gaudens (31483)</span><br />Population : 11753"}
			},
			{
				value: "11743",
				latitude: 47.336388888889,
				longitude: 5.0055555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Talant (21617)</span><br />Population : 11743"}
			},
			{
				value: "11674",
				latitude: 43.488055555556,
				longitude: -0.77083333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Orthez (64430)</span><br />Population : 11674"}
			},
			{
				value: "11671",
				latitude: -21.355833333333,
				longitude: 55.565833333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Petite-Île (97405)</span><br />Population : 11671"}
			},
			{
				value: "11645",
				latitude: 45.856388888889,
				longitude: 3.5475,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Thiers (63430)</span><br />Population : 11645"}
			},
			{
				value: "11639",
				latitude: 43.7925,
				longitude: 7.1877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carros (06033)</span><br />Population : 11639"}
			},
			{
				value: "11639",
				latitude: 44.365555555556,
				longitude: 2.5936111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Onet-le-Château (12176)</span><br />Population : 11639"}
			},
			{
				value: "11633",
				latitude: 47.4625,
				longitude: 6.8322222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Valentigney (25580)</span><br />Population : 11633"}
			},
			{
				value: "11620",
				latitude: 45.596666666667,
				longitude: 5.8775,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Motte-Servolex (73179)</span><br />Population : 11620"}
			},
			{
				value: "11613",
				latitude: 49.341944444444,
				longitude: 1.0913888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Oissel (76484)</span><br />Population : 11613"}
			},
			{
				value: "11580",
				latitude: 49.321388888889,
				longitude: 6.1183333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Florange (57221)</span><br />Population : 11580"}
			},
			{
				value: "11576",
				latitude: 50.735555555556,
				longitude: 2.2372222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Longuenesse (62525)</span><br />Population : 11576"}
			},
			{
				value: "11553",
				latitude: 48.279722222222,
				longitude: 4.0538888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-André-les-Vergers (10333)</span><br />Population : 11553"}
			},
			{
				value: "11537",
				latitude: 48.489444444444,
				longitude: -2.7958333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ploufragan (22215)</span><br />Population : 11537"}
			},
			{
				value: "11527",
				latitude: 47.806666666667,
				longitude: 7.1758333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cernay (68063)</span><br />Population : 11527"}
			},
			{
				value: "11518",
				latitude: 45.673888888889,
				longitude: 4.7541666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brignais (69027)</span><br />Population : 11518"}
			},
			{
				value: "11505",
				latitude: 50.660277777778,
				longitude: 3.0438888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-André-lez-Lille (59527)</span><br />Population : 11505"}
			},
			{
				value: "11494",
				latitude: 48.789444444444,
				longitude: 2.5766666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Queue-en-Brie (94060)</span><br />Population : 11494"}
			},
			{
				value: "11486",
				latitude: 49.481944444444,
				longitude: 1.0419444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maromme (76410)</span><br />Population : 11486"}
			},
			{
				value: "11481",
				latitude: 46.387222222222,
				longitude: 5.8633333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Claude (39478)</span><br />Population : 11481"}
			},
			{
				value: "11469",
				latitude: 50.725833333333,
				longitude: 1.6322222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Martin-Boulogne (62758)</span><br />Population : 11469"}
			},
			{
				value: "11449",
				latitude: 43.194166666667,
				longitude: -0.60666666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Oloron-Sainte-Marie (64422)</span><br />Population : 11449"}
			},
			{
				value: "11442",
				latitude: 50.517777777778,
				longitude: 1.6405555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Étaples (62318)</span><br />Population : 11442"}
			},
			{
				value: "11436",
				latitude: 48.321666666667,
				longitude: 0.82166666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nogent-le-Rotrou (28280)</span><br />Population : 11436"}
			},
			{
				value: "11415",
				latitude: 44.7425,
				longitude: -1.0902777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Andernos-les-Bains (33005)</span><br />Population : 11415"}
			},
			{
				value: "11410",
				latitude: 48.541666666667,
				longitude: 7.7094444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ostwald (67365)</span><br />Population : 11410"}
			},
			{
				value: "11396",
				latitude: 43.639722222222,
				longitude: 4.8125,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Martin-de-Crau (13097)</span><br />Population : 11396"}
			},
			{
				value: "11386",
				latitude: 45.123055555556,
				longitude: 5.6980555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Pont-de-Claix (38317)</span><br />Population : 11386"}
			},
			{
				value: "11345",
				latitude: 46.185,
				longitude: 6.2075,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gaillard (74133)</span><br />Population : 11345"}
			},
			{
				value: "11317",
				latitude: 45.205,
				longitude: 5.665,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sassenage (38474)</span><br />Population : 11317"}
			},
			{
				value: "11308",
				latitude: 41.590833333333,
				longitude: 9.279722222222199,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Porto-Vecchio (2A247)</span><br />Population : 11308"}
			},
			{
				value: "11301",
				latitude: 43.536111111111,
				longitude: 1.2311111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fonsorbes (31187)</span><br />Population : 11301"}
			},
			{
				value: "11292",
				latitude: 43.2525,
				longitude: 6.53,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cogolin (83042)</span><br />Population : 11292"}
			},
			{
				value: "11291",
				latitude: 44.934444444444,
				longitude: 4.8747222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guilherand-Granges (07102)</span><br />Population : 11291"}
			},
			{
				value: "11287",
				latitude: 45.067222222222,
				longitude: 4.8327777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tournon-sur-Rhône (07324)</span><br />Population : 11287"}
			},
			{
				value: "11285",
				latitude: 43.515555555556,
				longitude: 1.4980555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Castanet-Tolosan (31113)</span><br />Population : 11285"}
			},
			{
				value: "11284",
				latitude: 48.462222222222,
				longitude: 7.4819444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Obernai (67348)</span><br />Population : 11284"}
			},
			{
				value: "11280",
				latitude: 48.455555555556,
				longitude: -2.0502777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dinan (22050)</span><br />Population : 11280"}
			},
			{
				value: "11278",
				latitude: 44.658611111111,
				longitude: -1.1688888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arcachon (33009)</span><br />Population : 11278"}
			},
			{
				value: "11258",
				latitude: 43.398333333333,
				longitude: 5.3658333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Septèmes-les-Vallons (13106)</span><br />Population : 11258"}
			},
			{
				value: "11244",
				latitude: 43.551388888889,
				longitude: 1.5341666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Orens-de-Gameville (31506)</span><br />Population : 11244"}
			},
			{
				value: "11229",
				latitude: 45.751666666667,
				longitude: 3.0830555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Beaumont (63032)</span><br />Population : 11229"}
			},
			{
				value: "11220",
				latitude: 43.693333333333,
				longitude: 4.2761111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vauvert (30341)</span><br />Population : 11220"}
			},
			{
				value: "11214",
				latitude: 43.19,
				longitude: 6.0411111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Solliès-Pont (83130)</span><br />Population : 11214"}
			},
			{
				value: "11204",
				latitude: 46.722777777778,
				longitude: 2.505,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Amand-Montrond (18197)</span><br />Population : 11204"}
			},
			{
				value: "11202",
				latitude: 47.968611111111,
				longitude: 0.16055555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Allonnes (72003)</span><br />Population : 11202"}
			},
			{
				value: "11192",
				latitude: 49.138333333333,
				longitude: -0.35305555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ifs (14341)</span><br />Population : 11192"}
			},
			{
				value: "11191",
				latitude: 44.035555555556,
				longitude: 4.9972222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Monteux (84080)</span><br />Population : 11191"}
			},
			{
				value: "11190",
				latitude: 48.945,
				longitude: 2.6866666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Claye-Souilly (77118)</span><br />Population : 11190"}
			},
			{
				value: "11169",
				latitude: 48.6325,
				longitude: -2.0616666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dinard (35093)</span><br />Population : 11169"}
			},
			{
				value: "11134",
				latitude: 50.369722222222,
				longitude: 3.5547222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Saulve (59544)</span><br />Population : 11134"}
			},
			{
				value: "11132",
				latitude: 49.186944444444,
				longitude: 2.4608333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chantilly (60141)</span><br />Population : 11132"}
			},
			{
				value: "11116",
				latitude: 50.508333333333,
				longitude: 2.4736111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Auchel (62048)</span><br />Population : 11116"}
			},
			{
				value: "11078",
				latitude: 48.526388888889,
				longitude: 2.6822222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vaux-le-Pénil (77487)</span><br />Population : 11078"}
			},
			{
				value: "11066",
				latitude: 46.648611111111,
				longitude: -0.24694444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Parthenay (79202)</span><br />Population : 11066"}
			},
			{
				value: "11041",
				latitude: 48.408611111111,
				longitude: -4.3969444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Le Relecq-Kerhuon (29235)</span><br />Population : 11041"}
			},
			{
				value: "11033",
				latitude: 42.713333333333,
				longitude: 2.8419444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Estève (66172)</span><br />Population : 11033"}
			},
			{
				value: "11031",
				latitude: 47.411388888889,
				longitude: 2.9266666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cosne-Cours-sur-Loire (58086)</span><br />Population : 11031"}
			},
			{
				value: "11022",
				latitude: 46.042777777778,
				longitude: 4.0405555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Riorges (42184)</span><br />Population : 11022"}
			},
			{
				value: "11013",
				latitude: 48.826111111111,
				longitude: 2.1933333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ville-d'Avray (92077)</span><br />Population : 11013"}
			},
			{
				value: "11000",
				latitude: 49.088611111111,
				longitude: 0.5983333333333301,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bernay (27056)</span><br />Population : 11000"}
			},
			{
				value: "10986",
				latitude: 47.3375,
				longitude: 0.71388888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chambray-lès-Tours (37050)</span><br />Population : 10986"}
			},
			{
				value: "10982",
				latitude: 43.346944444444,
				longitude: 5.4630555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Plan-de-Cuques (13075)</span><br />Population : 10982"}
			},
			{
				value: "10954",
				latitude: 48.421944444444,
				longitude: 7.6611111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Erstein (67130)</span><br />Population : 10954"}
			},
			{
				value: "10905",
				latitude: 43.9775,
				longitude: 4.9030555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vedène (84141)</span><br />Population : 10905"}
			},
			{
				value: "10891",
				latitude: 45.798333333333,
				longitude: 3.2483333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pont-du-Château (63284)</span><br />Population : 10891"}
			},
			{
				value: "10878",
				latitude: 48.742222222222,
				longitude: 2.2261111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Igny (91312)</span><br />Population : 10878"}
			},
			{
				value: "10843",
				latitude: 47.404166666667,
				longitude: 0.59888888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fondettes (37109)</span><br />Population : 10843"}
			},
			{
				value: "10842",
				latitude: 49.212222222222,
				longitude: 6.1611111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maizières-lès-Metz (57433)</span><br />Population : 10842"}
			},
			{
				value: "10833",
				latitude: 47.388333333333,
				longitude: 0.82722222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montlouis-sur-Loire (37156)</span><br />Population : 10833"}
			},
			{
				value: "10819",
				latitude: 43.789444444444,
				longitude: 4.8316666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Rémy-de-Provence (13100)</span><br />Population : 10819"}
			},
			{
				value: "10814",
				latitude: 46.066944444444,
				longitude: 6.3119444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Roche-sur-Foron (74224)</span><br />Population : 10814"}
			},
			{
				value: "10796",
				latitude: 47.265833333333,
				longitude: -2.34,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pornichet (44132)</span><br />Population : 10796"}
			},
			{
				value: "10762",
				latitude: 49.378888888889,
				longitude: 2.4125,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Clermont (60157)</span><br />Population : 10762"}
			},
			{
				value: "10748",
				latitude: 45.548055555556,
				longitude: 2.3091666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ussel (19275)</span><br />Population : 10748"}
			},
			{
				value: "10746",
				latitude: 47.686666666667,
				longitude: -2.7344444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Avé (56206)</span><br />Population : 10746"}
			},
			{
				value: "10738",
				latitude: 43.056944444444,
				longitude: 2.2186111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Limoux (11206)</span><br />Population : 10738"}
			},
			{
				value: "10737",
				latitude: 14.708055555556,
				longitude: -61.0075,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gros-Morne (97212)</span><br />Population : 10737"}
			},
			{
				value: "10735",
				latitude: 48.953611111111,
				longitude: 2.4163888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dugny (93030)</span><br />Population : 10735"}
			},
			{
				value: "10730",
				latitude: -21.241944444444,
				longitude: 55.333333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Les Avirons (97401)</span><br />Population : 10730"}
			},
			{
				value: "10718",
				latitude: 47.790555555556,
				longitude: -3.4886111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guidel (56078)</span><br />Population : 10718"}
			},
			{
				value: "10712",
				latitude: 48.590277777778,
				longitude: 2.2477777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arpajon (91021)</span><br />Population : 10712"}
			},
			{
				value: "10711",
				latitude: 48.632222222222,
				longitude: 2.5486111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lieusaint (77251)</span><br />Population : 10711"}
			},
			{
				value: "10697",
				latitude: 46.721111111111,
				longitude: -1.9455555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Hilaire-de-Riez (85226)</span><br />Population : 10697"}
			},
			{
				value: "10696",
				latitude: 44.256388888889,
				longitude: 4.6483333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pont-Saint-Esprit (30202)</span><br />Population : 10696"}
			},
			{
				value: "10691",
				latitude: 49.253055555556,
				longitude: 3.0902777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villers-Cotterêts (02810)</span><br />Population : 10691"}
			},
			{
				value: "10690",
				latitude: 43.200555555556,
				longitude: 2.7577777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lézignan-Corbières (11203)</span><br />Population : 10690"}
			},
			{
				value: "10688",
				latitude: 16.027222222222,
				longitude: -61.698333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Claude (97124)</span><br />Population : 10688"}
			},
			{
				value: "10676",
				latitude: 47.982222222222,
				longitude: 3.3972222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Joigny (89206)</span><br />Population : 10676"}
			},
			{
				value: "10673",
				latitude: 50.458055555556,
				longitude: 2.9472222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Courrières (62250)</span><br />Population : 10673"}
			},
			{
				value: "10668",
				latitude: 43.426666666667,
				longitude: 3.6052777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mèze (34157)</span><br />Population : 10668"}
			},
			{
				value: "10660",
				latitude: 49.045277777778,
				longitude: -1.4452777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Coutances (50147)</span><br />Population : 10660"}
			},
			{
				value: "10654",
				latitude: 43.997777777778,
				longitude: 5.0591666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pernes-les-Fontaines (84088)</span><br />Population : 10654"}
			},
			{
				value: "10649",
				latitude: 43.698888888889,
				longitude: 1.8188888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lavaur (81140)</span><br />Population : 10649"}
			},
			{
				value: "10647",
				latitude: 48.090277777778,
				longitude: -1.6955555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Jacques-de-la-Lande (35281)</span><br />Population : 10647"}
			},
			{
				value: "10635",
				latitude: 47.5775,
				longitude: 6.7616666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Héricourt (70285)</span><br />Population : 10635"}
			},
			{
				value: "10634",
				latitude: 46.333333333333,
				longitude: 6.0577777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gex (01173)</span><br />Population : 10634"}
			},
			{
				value: "10630",
				latitude: 42.618055555556,
				longitude: 3.0063888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Cyprien (66171)</span><br />Population : 10630"}
			},
			{
				value: "10627",
				latitude: 45.838888888889,
				longitude: 1.31,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Panazol (87114)</span><br />Population : 10627"}
			},
			{
				value: "10620",
				latitude: 48.624166666667,
				longitude: 7.7547222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hœnheim (67204)</span><br />Population : 10620"}
			},
			{
				value: "10600",
				latitude: 48.453055555556,
				longitude: 1.4619444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mainvilliers (28229)</span><br />Population : 10600"}
			},
			{
				value: "10592",
				latitude: 49.153333333333,
				longitude: 2.2711111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Persan (95487)</span><br />Population : 10592"}
			},
			{
				value: "10590",
				latitude: 50.459444444444,
				longitude: 3.5683333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vieux-Condé (59616)</span><br />Population : 10590"}
			},
			{
				value: "10587",
				latitude: 48.294722222222,
				longitude: 4.0488888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Savine (10362)</span><br />Population : 10587"}
			},
			{
				value: "10571",
				latitude: 44.608611111111,
				longitude: 2.0316666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Figeac (46102)</span><br />Population : 10571"}
			},
			{
				value: "10524",
				latitude: 45.825833333333,
				longitude: 3.1447222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gerzat (63164)</span><br />Population : 10524"}
			},
			{
				value: "10523",
				latitude: 45.896111111111,
				longitude: 4.4330555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tarare (69243)</span><br />Population : 10523"}
			},
			{
				value: "10522",
				latitude: 45.433888888889,
				longitude: 4.3236111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roche-la-Molière (42189)</span><br />Population : 10522"}
			},
			{
				value: "10517",
				latitude: 43.3325,
				longitude: -0.43583333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lescar (64335)</span><br />Population : 10517"}
			},
			{
				value: "10496",
				latitude: 49.25,
				longitude: 3.9908333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tinqueux (51573)</span><br />Population : 10496"}
			},
			{
				value: "10486",
				latitude: 50.301388888889,
				longitude: 3.3933333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Douchy-les-Mines (59179)</span><br />Population : 10486"}
			},
			{
				value: "10469",
				latitude: 50.33,
				longitude: 3.2511111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aniche (59008)</span><br />Population : 10469"}
			},
			{
				value: "10463",
				latitude: 43.446944444444,
				longitude: 5.6858333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Trets (13110)</span><br />Population : 10463"}
			},
			{
				value: "10453",
				latitude: 43.740833333333,
				longitude: 7.3141666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Trinité (06149)</span><br />Population : 10453"}
			},
			{
				value: "10447",
				latitude: 48.1825,
				longitude: -1.6438888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Betton (35024)</span><br />Population : 10447"}
			},
			{
				value: "10444",
				latitude: 47.805277777778,
				longitude: 7.2375,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Wittelsheim (68375)</span><br />Population : 10444"}
			},
			{
				value: "10443",
				latitude: 43.62,
				longitude: 6.9719444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mouans-Sartoux (06084)</span><br />Population : 10443"}
			},
			{
				value: "10437",
				latitude: 43.491666666667,
				longitude: 2.3733333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mazamet (81163)</span><br />Population : 10437"}
			},
			{
				value: "10413",
				latitude: 47.651388888889,
				longitude: -2.0847222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Redon (35236)</span><br />Population : 10413"}
			},
			{
				value: "10402",
				latitude: 43.665277777778,
				longitude: 1.505,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Jean (31488)</span><br />Population : 10402"}
			},
			{
				value: "10389",
				latitude: 43.2375,
				longitude: 6.0708333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cuers (83049)</span><br />Population : 10389"}
			},
			{
				value: "10381",
				latitude: 45.037777777778,
				longitude: 5.05,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bourg-de-Péage (26057)</span><br />Population : 10381"}
			},
			{
				value: "10361",
				latitude: 48.877777777778,
				longitude: 2.1422222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Croissy-sur-Seine (78190)</span><br />Population : 10361"}
			},
			{
				value: "10361",
				latitude: 44.049166666667,
				longitude: 2.1580555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carmaux (81060)</span><br />Population : 10361"}
			},
			{
				value: "10358",
				latitude: 42.965277777778,
				longitude: 1.6069444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Foix (09122)</span><br />Population : 10358"}
			},
			{
				value: "10327",
				latitude: 45.668055555556,
				longitude: 4.9019444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Corbas (69273)</span><br />Population : 10327"}
			},
			{
				value: "10324",
				latitude: 48.177777777778,
				longitude: -2.7533333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Loudéac (22136)</span><br />Population : 10324"}
			},
			{
				value: "10312",
				latitude: 43.427222222222,
				longitude: 6.4319444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vidauban (83148)</span><br />Population : 10312"}
			},
			{
				value: "10286",
				latitude: 49.469722222222,
				longitude: 1.0497222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Déville-lès-Rouen (76216)</span><br />Population : 10286"}
			},
			{
				value: "10279",
				latitude: 44.89,
				longitude: 1.2166666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sarlat-la-Canéda (24520)</span><br />Population : 10279"}
			},
			{
				value: "10279",
				latitude: 47.389166666667,
				longitude: 0.66055555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Riche (37195)</span><br />Population : 10279"}
			},
			{
				value: "10269",
				latitude: 46.5975,
				longitude: 0.34916666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Buxerolles (86041)</span><br />Population : 10269"}
			},
			{
				value: "10240",
				latitude: 48.147777777778,
				longitude: -1.7738888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pacé (35210)</span><br />Population : 10240"}
			},
			{
				value: "10239",
				latitude: 48.625,
				longitude: 6.3497222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dombasle-sur-Meurthe (54159)</span><br />Population : 10239"}
			},
			{
				value: "10223",
				latitude: 50.746666666667,
				longitude: 3.1580555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Neuville-en-Ferrain (59426)</span><br />Population : 10223"}
			},
			{
				value: "10222",
				latitude: 48.673888888889,
				longitude: 2.3272222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Épinay-sur-Orge (91216)</span><br />Population : 10222"}
			},
			{
				value: "10216",
				latitude: 45.640277777778,
				longitude: 0.19777777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Soyaux (16374)</span><br />Population : 10216"}
			},
			{
				value: "10189",
				latitude: 50.563611111111,
				longitude: 2.4819444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lillers (62516)</span><br />Population : 10189"}
			},
			{
				value: "10179",
				latitude: 47.314444444444,
				longitude: 5.1061111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Quetigny (21515)</span><br />Population : 10179"}
			},
			{
				value: "10167",
				latitude: 49.260833333333,
				longitude: 6.1419444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Amnéville (57019)</span><br />Population : 10167"}
			},
			{
				value: "10164",
				latitude: 50.638611111111,
				longitude: 2.3966666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aire-sur-la-Lys (62014)</span><br />Population : 10164"}
			},
			{
				value: "10163",
				latitude: 50.735555555556,
				longitude: 2.3025,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arques (62040)</span><br />Population : 10163"}
			},
			{
				value: "10151",
				latitude: 48.528888888889,
				longitude: 2.0108333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dourdan (91200)</span><br />Population : 10151"}
			},
			{
				value: "10149",
				latitude: 42.546111111111,
				longitude: 3.0238888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Argelès-sur-Mer (66008)</span><br />Population : 10149"}
			},
			{
				value: "10146",
				latitude: 45.297777777778,
				longitude: 5.6369444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Voreppe (38565)</span><br />Population : 10146"}
			},
			{
				value: "10145",
				latitude: 48.088611111111,
				longitude: -1.6163888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chantepie (35055)</span><br />Population : 10145"}
			},
			{
				value: "10132",
				latitude: 47.301666666667,
				longitude: 5.1355555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chevigny-Saint-Sauveur (21171)</span><br />Population : 10132"}
			},
			{
				value: "10131",
				latitude: 14.468333333333,
				longitude: -60.921666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Luce (97227)</span><br />Population : 10131"}
			},
			{
				value: "10130",
				latitude: 50.701666666667,
				longitude: 3.0933333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bondues (59090)</span><br />Population : 10130"}
			},
			{
				value: "10113",
				latitude: 50.427777777778,
				longitude: 2.9297222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Montigny-en-Gohelle (62587)</span><br />Population : 10113"}
			},
			{
				value: "10106",
				latitude: 48.83,
				longitude: 2.0022222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villepreux (78674)</span><br />Population : 10106"}
			},
			{
				value: "10094",
				latitude: 46.454722222222,
				longitude: -1.1658333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Luçon (85128)</span><br />Population : 10094"}
			},
			{
				value: "10077",
				latitude: 44.384166666667,
				longitude: 4.9902777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Valréas (84138)</span><br />Population : 10077"}
			},
			{
				value: "10070",
				latitude: 48.701111111111,
				longitude: 6.2066666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Max (54482)</span><br />Population : 10070"}
			},
			{
				value: "10063",
				latitude: 50.419722222222,
				longitude: 2.8622222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sallaumines (62771)</span><br />Population : 10063"}
			},
			{
				value: "10061",
				latitude: 45.703611111111,
				longitude: 4.8241666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pierre-Bénite (69152)</span><br />Population : 10061"}
			},
			{
				value: "10061",
				latitude: 46.975,
				longitude: -0.21527777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Thouars (79329)</span><br />Population : 10061"}
			},
			{
				value: "10060",
				latitude: 43.095,
				longitude: 6.0736111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Carqueiranne (83034)</span><br />Population : 10060"}
			},
			{
				value: "10045",
				latitude: 49.249444444444,
				longitude: 6.0947222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rombas (57591)</span><br />Population : 10045"}
			},
			{
				value: "10017",
				latitude: 43.138055555556,
				longitude: 6.2344444444444,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Londe-les-Maures (83071)</span><br />Population : 10017"}
			},
			{
				value: "10008",
				latitude: 50.001944444444,
				longitude: 2.6522222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Albert (80016)</span><br />Population : 10008"}
			},
			{
				value: "10002",
				latitude: 48.731944444444,
				longitude: 7.7083333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brumath (67067)</span><br />Population : 10002"}
			},
			{
				value: "9990",
				latitude: 48.785833333333,
				longitude: 2.5383333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ormesson-sur-Marne (94055)</span><br />Population : 9990"}
			},
			{
				value: "9984",
				latitude: 49.061111111111,
				longitude: 6.1497222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marly (57447)</span><br />Population : 9984"}
			},
			{
				value: "9961",
				latitude: 47.436944444444,
				longitude: -2.0877777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pontchâteau (44129)</span><br />Population : 9961"}
			},
			{
				value: "9935",
				latitude: 50.294444444444,
				longitude: 4.1013888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Jeumont (59324)</span><br />Population : 9935"}
			},
			{
				value: "9934",
				latitude: 50.469166666667,
				longitude: 2.9936111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Oignies (62637)</span><br />Population : 9934"}
			},
			{
				value: "9908",
				latitude: 49.3575,
				longitude: 1.0072222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Grand-Couronne (76319)</span><br />Population : 9908"}
			},
			{
				value: "9907",
				latitude: 49.280833333333,
				longitude: 1.0211111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Caudebec-lès-Elbeuf (76165)</span><br />Population : 9907"}
			},
			{
				value: "9893",
				latitude: 45.526111111111,
				longitude: 4.2602777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Andrézieux-Bouthéon (42005)</span><br />Population : 9893"}
			},
			{
				value: "9891",
				latitude: 47.012222222222,
				longitude: 3.1463888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Varennes-Vauzelles (58303)</span><br />Population : 9891"}
			},
			{
				value: "9877",
				latitude: 50.675833333333,
				longitude: 3.0661111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Marquette-lez-Lille (59386)</span><br />Population : 9877"}
			},
			{
				value: "9864",
				latitude: 50.685277777778,
				longitude: 3.0486111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Wambrechies (59636)</span><br />Population : 9864"}
			},
			{
				value: "9840",
				latitude: 47.889722222222,
				longitude: 1.8397222222222,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">La Chapelle-Saint-Mesmin (45075)</span><br />Population : 9840"}
			},
			{
				value: "9829",
				latitude: 50.449166666667,
				longitude: 3.5905555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Condé-sur-l'Escaut (59153)</span><br />Population : 9829"}
			},
			{
				value: "9826",
				latitude: 44.644166666667,
				longitude: -0.9783333333333299,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Biganos (33051)</span><br />Population : 9826"}
			},
			{
				value: "9825",
				latitude: 48.701388888889,
				longitude: 2.245,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Villebon-sur-Yvette (91661)</span><br />Population : 9825"}
			},
			{
				value: "9824",
				latitude: 45.750833333333,
				longitude: 3.1108333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Aubière (63014)</span><br />Population : 9824"}
			},
			{
				value: "9819",
				latitude: 49.187777777778,
				longitude: 2.4161111111111,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gouvieux (60282)</span><br />Population : 9819"}
			},
			{
				value: "9813",
				latitude: 45.744444444444,
				longitude: 4.9663888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chassieu (69271)</span><br />Population : 9813"}
			},
			{
				value: "9809",
				latitude: 44.994722222222,
				longitude: -0.44583333333333,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-André-de-Cubzac (33366)</span><br />Population : 9809"}
			},
			{
				value: "9795",
				latitude: 43.458611111111,
				longitude: 2.0041666666667,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Revel (31451)</span><br />Population : 9795"}
			},
			{
				value: "9775",
				latitude: 50.529444444444,
				longitude: 2.9327777777778,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Annœullin (59011)</span><br />Population : 9775"}
			},
			{
				value: "9771",
				latitude: 43.631388888889,
				longitude: 5.1505555555556,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pélissanne (13069)</span><br />Population : 9771"}
			},
			{
				value: "9769",
				latitude: 48.696666666667,
				longitude: 2.1613888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bures-sur-Yvette (91122)</span><br />Population : 9769"}
			},
			{
				value: "9756",
				latitude: 49.921666666667,
				longitude: 4.0838888888889,
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hirson (02381)</span><br />Population : 9756"}
			}
		]
	});
	
	// Example #6
	$(".maparea6").mapael({
		map : {
			name : "world_countries",
			defaultArea: {
				attrs : {
					stroke : "#fff", 
					"stroke-width" : 1
				}
			}
		},
		legend : {
			area : {
				display : true,
				title :"Population by country", 
				slices : [
					{
						max :5000000, 
						attrs : {
							fill : "#97e766"
						},
						label :"Less than de 5000000 inhabitants"
					},
					{
						min :5000000, 
						max :10000000, 
						attrs : {
							fill : "#7fd34d"
						},
						label :"Between 5000000 and 10000000 inhabitants"
					},
					{
						min :10000000, 
						max :50000000, 
						attrs : {
							fill : "#5faa32"
						},
						label :"Between 10000000 and 50000000 inhabitants"
					},
					{
						min :50000000, 
						attrs : {
							fill : "#3f7d1a"
						},
						label :"More than 50 million inhabitants"
					}
				]
			},
			plot :{
				display : true,
				title: "Some cities ..."
				, slices : [
					{
						type :"square",
						max :500000, 
						attrs : {
							fill : "#d90000"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 2
						}, 
						label :"less than 500 000 inhabitants", 
						size : 12
					},
					{
						type :"square",
						min :500000, 
						max :1000000, 
						attrs : {
							fill : "#d90000"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 2
						}, 
						label :"Between 500 000 and 1 000 000 inhabitants", 
						size : 16
					},
					{
						type :"square",
						min :1000000, 
						attrs : {
							fill : "#d90000"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 2
						}, 
						label :"More than 1 million inhabitants", 
						size : 20
					}
				]
			}
		},
		plots : [
			{
				latitude :48.86, 
				longitude :2.3444, 
				value : 500000000, 
				tooltip: {content : "Paris<br />Population: 500000000"}
			},
			{
				latitude :40.667, 
				longitude :-73.833, 
				value : 200001, 
				tooltip: {content : "New york<br />Population: 200001"}
			},
			{
				latitude :-33.917, 
				longitude :151.167, 
				value : 600000, 
				tooltip: {content : "Sydney<br />Population: 600000"}
			},
			{
				latitude :-15.781682, 
				longitude :-47.924195, 
				value : 200000001, 
				tooltip: {content : "Brasilia<br />Population: 200000001"}
			},
			{
				latitude :35.687418, 
				longitude :139.692306, 
				value : 200001, 
				tooltip: {content : "Tokyo<br />Population: 200001"}
			}
		],
		areas: {

			"AF": {
				value: "35320445",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 35320445"}
			},
			"ZA": {
				value: "50586757",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Afrique du Sud</span><br />Population : 50586757"}
			},
			"AL": {
				value: "3215988",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Albanie</span><br />Population : 3215988"}
			},
			"DZ": {
				value: "35980193",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Algérie</span><br />Population : 35980193"}
			},
			"DE": {
				value: "81726000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Allemagne</span><br />Population : 81726000"}
			},
			"AD": {
				value: "86165",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Andorre</span><br />Population : 86165"}
			},
			"AO": {
				value: "19618432",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Angola</span><br />Population : 19618432"}
			},
			"AG": {
				value: "89612",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Antigua-et-Barbuda</span><br />Population : 89612"}
			},
			"SA": {
				value: "28082541",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arabie Saoudite</span><br />Population : 28082541"}
			},
			"AR": {
				value: "40764561",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Argentine</span><br />Population : 40764561"}
			},
			"AM": {
				value: "3100236",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Arménie</span><br />Population : 3100236"}
			},
			"AU": {
				value: "22620600",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Australie</span><br />Population : 22620600"}
			},
			"AT": {
				value: "8419000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Autriche</span><br />Population : 8419000"}
			},
			"AZ": {
				value: "9168000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Azerbaïdjan</span><br />Population : 9168000"}
			},
			"BS": {
				value: "347176",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 347176"}
			},
			"BH": {
				value: "1323535",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bahrein</span><br />Population : 1323535"}
			},
			"BD": {
				value: "150493658",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 150493658"}
			},
			"BB": {
				value: "273925",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Barbade</span><br />Population : 273925"}
			},
			"BE": {
				value: "11008000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Belgique</span><br />Population : 11008000"}
			},
			"BZ": {
				value: "356600",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Belize</span><br />Population : 356600"}
			},
			"BJ": {
				value: "9099922",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bénin</span><br />Population : 9099922"}
			},
			"BT": {
				value: "738267",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bhoutan</span><br />Population : 738267"}
			},
			"BY": {
				value: "9473000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Biélorussie</span><br />Population : 9473000"}
			},
			"MM": {
				value: "48336763",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Birmanie</span><br />Population : 48336763"}
			},
			"BO": {
				value: "10088108",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bolivie</span><br />Population : 10088108"}
			},
			"BA": {
				value: "3752228",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bosnie-Herzégovine</span><br />Population : 3752228"}
			},
			"BW": {
				value: "2030738",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 2030738"}
			},
			"BR": {
				value: "196655014",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brésil</span><br />Population : 196655014"}
			},
			"BN": {
				value: "405938",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Brunei</span><br />Population : 405938"}
			},
			"BG": {
				value: "7476000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Bulgarie</span><br />Population : 7476000"}
			},
			"BF": {
				value: "16967845",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 16967845"}
			},
			"BI": {
				value: "8575172",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 8575172"}
			},
			"KH": {
				value: "14305183",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cambodge</span><br />Population : 14305183"}
			},
			"CM": {
				value: "20030362",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cameroun</span><br />Population : 20030362"}
			},
			"CA": {
				value: "34482779",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Canada</span><br />Population : 34482779"}
			},
			"CV": {
				value: "500585",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cap-Vert</span><br />Population : 500585"}
			},
			"CF": {
				value: "4486837",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Centrafrique</span><br />Population : 4486837"}
			},
			"CL": {
				value: "17269525",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chili</span><br />Population : 17269525"}
			},
			"CN": {
				value: "1344130000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chine</span><br />Population : 1344130000"}
			},
			"CY": {
				value: "1116564",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Chypre</span><br />Population : 1116564"}
			},
			"CO": {
				value: "46927125",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Colombie</span><br />Population : 46927125"}
			},
			"KM": {
				value: "753943",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Comores</span><br />Population : 753943"}
			},
			"CG": {
				value: "4139748",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Congo-Brazzaville</span><br />Population : 4139748"}
			},
			"CD": {
				value: "67757577",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Congo-Kinshasa</span><br />Population : 67757577"}
			},
			"KP": {
				value: "24451285",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Corée du Nord</span><br />Population : 24451285"}
			},
			"KR": {
				value: "49779000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Corée du Sud</span><br />Population : 49779000"}
			},
			"CR": {
				value: "4726575",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 4726575"}
			},
			"CI": {
				value: "20152894",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cote d'Ivoire</span><br />Population : 20152894"}
			},
			"HR": {
				value: "4407000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Croatie</span><br />Population : 4407000"}
			},
			"CU": {
				value: "11253665",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 11253665"}
			},
			"DK": {
				value: "5574000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Danemark</span><br />Population : 5574000"}
			},
			"DJ": {
				value: "905564",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 905564"}
			},
			"DM": {
				value: "67675",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Dominique</span><br />Population : 67675"}
			},
			"EG": {
				value: "82536770",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Égypte</span><br />Population : 82536770"}
			},
			"AE": {
				value: "7890924",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Émirats Arabes Unis</span><br />Population : 7890924"}
			},
			"EC": {
				value: "14666055",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Équateur</span><br />Population : 14666055"}
			},
			"ER": {
				value: "5415280",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Érythree</span><br />Population : 5415280"}
			},
			"ES": {
				value: "46235000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Espagne</span><br />Population : 46235000"}
			},
			"EE": {
				value: "1340000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Estonie</span><br />Population : 1340000"}
			},
			"US": {
				value: "311591917",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">États-unis</span><br />Population : 311591917"}
			},
			"ET": {
				value: "84734262",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Éthiopie</span><br />Population : 84734262"}
			},
			"FJ": {
				value: "868406",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Fidji</span><br />Population : 868406"}
			},
			"FI": {
				value: "5387000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Finlande</span><br />Population : 5387000"}
			},
			"FR": {
				value: "65436552",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">France</span><br />Population : 65436552"}
			},
			"GA": {
				value: "1534262",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 1534262"}
			},
			"GM": {
				value: "1776103",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Gambie</span><br />Population : 1776103"}
			},
			"GE": {
				value: "4486000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Géorgie</span><br />Population : 4486000"}
			},
			"GH": {
				value: "24965816",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 24965816"}
			},
			"GR": {
				value: "11304000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Grèce</span><br />Population : 11304000"}
			},
			"GD": {
				value: "104890",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Grenade</span><br />Population : 104890"}
			},
			"GT": {
				value: "14757316",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 14757316"}
			},
			"GN": {
				value: "10221808",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guinée</span><br />Population : 10221808"}
			},
			"GQ": {
				value: "720213",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guinée Équatoriale</span><br />Population : 720213"}
			},
			"GW": {
				value: "1547061",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guinée-Bissau</span><br />Population : 1547061"}
			},
			"GY": {
				value: "756040",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 756040"}
			},
			"HT": {
				value: "10123787",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Haïti</span><br />Population : 10123787"}
			},
			"HN": {
				value: "7754687",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 7754687"}
			},
			"HU": {
				value: "9971000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Hongrie</span><br />Population : 9971000"}
			},
			"JM": {
				value: "2709300",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Jamaïque</span><br />Population : 2709300"}
			},
			"JP": {
				value: "127817277",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Japon</span><br />Population : 127817277"}
			},
			"MH": {
				value: "54816",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Îles Marshall</span><br />Population : 54816"}
			},
			"PW": {
				value: "20609",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Îles Palaos</span><br />Population : 20609"}
			},
			"SB": {
				value: "552267",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Îles Salomon</span><br />Population : 552267"}
			},
			"IN": {
				value: "1241491960",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Inde</span><br />Population : 1241491960"}
			},
			"ID": {
				value: "242325638",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Indonésie</span><br />Population : 242325638"}
			},
			"JO": {
				value: "6181000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Jordanie</span><br />Population : 6181000"}
			},
			"IR": {
				value: "74798599",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Iran</span><br />Population : 74798599"}
			},
			"IQ": {
				value: "32961959",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 32961959"}
			},
			"IE": {
				value: "4487000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Irlande</span><br />Population : 4487000"}
			},
			"IS": {
				value: "319000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Islande</span><br />Population : 319000"}
			},
			"IL": {
				value: "7765700",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Israël</span><br />Population : 7765700"}
			},
			"IT": {
				value: "60770000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Italie</span><br />Population : 60770000"}
			},
			"KZ": {
				value: "16558459",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 16558459"}
			},
			"KE": {
				value: "41609728",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 41609728"}
			},
			"KG": {
				value: "5507000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Kirghizistan</span><br />Population : 5507000"}
			},
			"KI": {
				value: "101093",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 101093"}
			},
			"KW": {
				value: "2818042",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Koweït</span><br />Population : 2818042"}
			},
			"LA": {
				value: "6288037",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Laos</span><br />Population : 6288037"}
			},
			"LS": {
				value: "2193843",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 2193843"}
			},
			"LV": {
				value: "2220000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lettonie</span><br />Population : 2220000"}
			},
			"LB": {
				value: "4259405",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Liban</span><br />Population : 4259405"}
			},
			"LR": {
				value: "4128572",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 4128572"}
			},
			"LY": {
				value: "6422772",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Libye</span><br />Population : 6422772"}
			},
			"LI": {
				value: "36304",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 36304"}
			},
			"LT": {
				value: "3203000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Lituanie</span><br />Population : 3203000"}
			},
			"LU": {
				value: "517000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 517000"}
			},
			"MK": {
				value: "2063893",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Macédoine</span><br />Population : 2063893"}
			},
			"MG": {
				value: "21315135",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 21315135"}
			},
			"MY": {
				value: "28859154",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Malaisie</span><br />Population : 28859154"}
			},
			"MW": {
				value: "15380888",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 15380888"}
			},
			"MV": {
				value: "320081",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 320081"}
			},
			"ML": {
				value: "15839538",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mali</span><br />Population : 15839538"}
			},
			"MT": {
				value: "419000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Malte</span><br />Population : 419000"}
			},
			"MA": {
				value: "32272974",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maroc</span><br />Population : 32272974"}
			},
			"MU": {
				value: "1286051",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Maurice</span><br />Population : 1286051"}
			},
			"MR": {
				value: "3541540",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mauritanie</span><br />Population : 3541540"}
			},
			"MX": {
				value: "114793341",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mexique</span><br />Population : 114793341"}
			},
			"FM": {
				value: "111542",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Micronésie</span><br />Population : 111542"}
			},
			"MD": {
				value: "3559000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Moldavie</span><br />Population : 3559000"}
			},
			"MC": {
				value: "35427",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 35427"}
			},
			"MN": {
				value: "2800114",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mongolie</span><br />Population : 2800114"}
			},
			"ME": {
				value: "632261",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Monténégro</span><br />Population : 632261"}
			},
			"MZ": {
				value: "23929708",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 23929708"}
			},
			"NA": {
				value: "2324004",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Namibie</span><br />Population : 2324004"}
			},
			"NP": {
				value: "30485798",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Népal</span><br />Population : 30485798"}
			},
			"NI": {
				value: "5869859",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 5869859"}
			},
			"NE": {
				value: "16068994",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Niger</span><br />Population : 16068994"}
			},
			"NG": {
				value: "162470737",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nigéria</span><br />Population : 162470737"}
			},
			"NO": {
				value: "4952000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Norvège</span><br />Population : 4952000"}
			},
			"NZ": {
				value: "4405200",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Nouvelle-Zélande</span><br />Population : 4405200"}
			},
			"OM": {
				value: "2846145",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Oman</span><br />Population : 2846145"}
			},
			"UG": {
				value: "34509205",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ouganda</span><br />Population : 34509205"}
			},
			"UZ": {
				value: "29341200",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ouzbékistan</span><br />Population : 29341200"}
			},
			"PK": {
				value: "176745364",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 176745364"}
			},
			"PS": {
				value: "4019433",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Palestine</span><br />Population : 4019433"}
			},
			"PA": {
				value: "3571185",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Panama</span><br />Population : 3571185"}
			},
			"PG": {
				value: "7013829",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Papouasie-Nouvelle-Guinée</span><br />Population : 7013829"}
			},
			"PY": {
				value: "6568290",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 6568290"}
			},
			"NL": {
				value: "16696000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pays-Bas</span><br />Population : 16696000"}
			},
			"PE": {
				value: "29399817",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pérou</span><br />Population : 29399817"}
			},
			"PH": {
				value: "94852030",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 94852030"}
			},
			"PL": {
				value: "38216000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Pologne</span><br />Population : 38216000"}
			},
			"PT": {
				value: "10637000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 10637000"}
			},
			"QA": {
				value: "1870041",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 1870041"}
			},
			"DO": {
				value: "10056181",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">République Dominicaine</span><br />Population : 10056181"}
			},
			"RO": {
				value: "21390000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Roumanie</span><br />Population : 21390000"}
			},
			"GB": {
				value: "62641000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Royaume-Uni</span><br />Population : 62641000"}
			},
			"RU": {
				value: "141930000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Russie</span><br />Population : 141930000"}
			},
			"RW": {
				value: "10942950",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 10942950"}
			},
			"KN": {
				value: "53051",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Christophe-et-Niévès</span><br />Population : 53051"}
			},
			"SM": {
				value: "31735",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Marin</span><br />Population : 31735"}
			},
			"VC": {
				value: "109365",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Saint-Vincent-et-les Grenadines</span><br />Population : 109365"}
			},
			"LC": {
				value: "176000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sainte-Lucie</span><br />Population : 176000"}
			},
			"SV": {
				value: "6227491",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 6227491"}
			},
			"WS": {
				value: "183874",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Samoa Occidentales</span><br />Population : 183874"}
			},
			"ST": {
				value: "168526",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sao Tomé-et-Principe</span><br />Population : 168526"}
			},
			"SN": {
				value: "12767556",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sénégal</span><br />Population : 12767556"}
			},
			"RS": {
				value: "7261000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Serbie</span><br />Population : 7261000"}
			},
			"SC": {
				value: "86000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 86000"}
			},
			"SL": {
				value: "5997486",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 5997486"}
			},
			"SG": {
				value: "5183700",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Singapour</span><br />Population : 5183700"}
			},
			"SK": {
				value: "5440000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Slovaquie</span><br />Population : 5440000"}
			},
			"SI": {
				value: "2052000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Slovénie</span><br />Population : 2052000"}
			},
			"SO": {
				value: "9556873",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Somalie</span><br />Population : 9556873"}
			},
			"SD": {
				value: "34318385",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Soudan</span><br />Population : 34318385"}
			},
			"SS": {
				value: "10314021",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Soudan du Sud</span><br />Population : 10314021"}
			},
			"LK": {
				value: "20869000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 20869000"}
			},
			"SE": {
				value: "9453000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Suède</span><br />Population : 9453000"}
			},
			"CH": {
				value: "7907000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Suisse</span><br />Population : 7907000"}
			},
			"SR": {
				value: "529419",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 529419"}
			},
			"SZ": {
				value: "1067773",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 1067773"}
			},
			"SY": {
				value: "20820311",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Syrie</span><br />Population : 20820311"}
			},
			"TJ": {
				value: "6976958",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tadjikistan</span><br />Population : 6976958"}
			},
			"TZ": {
				value: "46218486",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tanzanie</span><br />Population : 46218486"}
			},
			"TD": {
				value: "11525496",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tchad</span><br />Population : 11525496"}
			},
			"CZ": {
				value: "10546000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tchéquie</span><br />Population : 10546000"}
			},
			"TH": {
				value: "69518555",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Thaïlande</span><br />Population : 69518555"}
			},
			"TL": {
				value: "1175880",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Timor Oriental</span><br />Population : 1175880"}
			},
			"TG": {
				value: "6154813",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Togo</span><br />Population : 6154813"}
			},
			"TO": {
				value: "104509",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 104509"}
			},
			"TT": {
				value: "1346350",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Trinité-et-Tobago</span><br />Population : 1346350"}
			},
			"TN": {
				value: "10673800",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tunisie</span><br />Population : 10673800"}
			},
			"TM": {
				value: "5105301",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Turkménistan</span><br />Population : 5105301"}
			},
			"TR": {
				value: "73639596",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Turquie</span><br />Population : 73639596"}
			},
			"TV": {
				value: "9847",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 9847"}
			},
			"VU": {
				value: "245619",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 245619"}
			},
			"VE": {
				value: "29278000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Vénézuela</span><br />Population : 29278000"}
			},
			"VN": {
				value: "87840000",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Viêt Nam</span><br />Population : 87840000"}
			},
			"UA": {
				value: "45706100",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 45706100"}
			},
			"UY": {
				value: "3368595",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 3368595"}
			},
			"YE": {
				value: "24799880",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Yémen</span><br />Population : 24799880"}
			},
			"ZM": {
				value: "13474959",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Zambie</span><br />Population : 13474959"}
			},
			"ZW": {
				value: "12754378",
				attrs : {href : "#"},
				tooltip: {content : "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 12754378"}
			}
		}
	});	
	
	// Example #7
	$(".maparea7").mapael({
		map : {
			name : "usa_states",
			defaultArea: {
				onclick: function(params, mapElem, textElem) {
					console.log(mapElem);
				}
			}
		},
		plots: [
			{
				latitude: 40.717079,
				longitude: -74.00116,
				tooltip: {content : "New York"}
			},
			{
				latitude: 61.2108398, 
				longitude: -149.9019557,
				tooltip: {content : "Anchorage"}
			},
			{
				latitude: 40.717079,
				longitude: -74.00116,
				tooltip: {content : "New York"}
			},
			{
				latitude: 37.792032,
				longitude: -122.394613,
				tooltip: {content : "San Francisco"}
			},
						{
				latitude: 19.493204,
				longitude: -154.8199569,
				tooltip: {content : "Pahoa"}
			}
		]
	});
});