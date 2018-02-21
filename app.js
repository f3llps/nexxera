angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.pagination'])
  .controller('MainCtrl', MainCtrl)

 
MainCtrl.$inject = ['$http', 'uiGridConstants'];

function MainCtrl($http, uiGridConstants) {

   this.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
    if( col.filters[0].term ){
      return 'header-filtered';
    } else {
      return '';
    }
  };
  
	this.gridOptions1 = {
    enableFiltering: true,
	paginationPageSizes: [5, 10, 15],
    paginationPageSize: 5,
    onRegisterApi: function(gridApi){
      this.gridApi = gridApi;
    },
    columnDefs: [{ field: 'id',name:'Transferência', headerCellClass: this.highlightFilteredHeader },
		{ field: 'pagador.nome', name:'Pagador', headerCellClass: this.highlightFilteredHeader },
	{ field: 'pagador', name: 'Detalhes Pag.', cellTemplate: 'dadosPagador.html', headerCellClass: this.highlightFilteredHeader},
			{ field: 'beneficiario.nome', name:'Beneficiário', headerCellClass: this.highlightFilteredHeader },

	{ field: 'beneficiario', name: 'Detalhes Ben.', cellTemplate: 'dados.html', headerCellClass: this.highlightFilteredHeader},

	{ field: 'tipo', headerCellClass: this.highlightFilteredHeader },
	{ field: 'status', headerCellClass: this.highlightFilteredHeader },
	{ field: 'valor', headerCellClass: this.highlightFilteredHeader },
	]};

      // $http.get('return_api.json').then(function (data) {
      // this.gridOptions1.data = data;
	// });
	
  this.gridOptions1.data = 
  [
  {
    'id': '64183ca6-5a54-4754-ba9d-0f1d3866e12a',
    'pagador': {
      'nome': 'Júlia Silva',
      'banco': '001',
      'agencia': '0010',
      'conta': 48839414
    },
    'beneficiario': {
      'nome': 'Beatriz Nascimento',
      'banco': '237',
      'agencia': '3616',
      'conta': 58154347
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 12345.62
  },
  {
    'id': '0497d43e-3dce-4967-9080-c98c88a4a459',
    'pagador': {
      'nome': 'Ana Batista',
      'banco': '033',
      'agencia': '34560',
      'conta': 45158542
    },
    'beneficiario': {
      'nome': 'José Barros',
      'banco': '001',
      'agencia': '1200',
      'conta': 88455305
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 100.2
  },
  {
    'id': '9ef52336-9bb5-4a5d-b89b-5ba7deff4099',
    'pagador': {
      'nome': 'Lucas Batista',
      'banco': '001',
      'agencia': '0010',
      'conta': 36932971
    },
    'beneficiario': {
      'nome': 'Ana Silva',
      'banco': '033',
      'agencia': '34560',
      'conta': 93586172
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 222.12
  },
  {
    'id': '7855992a-edf4-4a23-929d-7d5f3d858d9c',
    'pagador': {
      'nome': 'Júlia Cardoso',
      'banco': '104',
      'agencia': '1200',
      'conta': 39209839
    },
    'beneficiario': {
      'nome': 'José Barbosa',
      'banco': '237',
      'agencia': '0010',
      'conta': 27279748
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 1222.03
  },
  {
    'id': '7b647b63-be09-4d82-a019-de06528d1763',
    'pagador': {
      'nome': 'José Cardoso',
      'banco': '104',
      'agencia': '0010',
      'conta': 61898440
    },
    'beneficiario': {
      'nome': 'João Cardoso',
      'banco': '237',
      'agencia': '34560',
      'conta': 27692053
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 222.12
  },
  {
    'id': 'abb2470b-ca9d-4942-9339-f308109884ed',
    'pagador': {
      'nome': 'João Barbosa',
      'banco': '001',
      'agencia': '34560',
      'conta': 51429973
    },
    'beneficiario': {
      'nome': 'Lucas Silva',
      'banco': '237',
      'agencia': '0010',
      'conta': 12517015
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 122.0
  },
  {
    'id': 'a8407c4c-9fbb-422c-bcb4-992fb32e6707',
    'pagador': {
      'nome': 'Júlia Barbosa',
      'banco': '001',
      'agencia': '0010',
      'conta': 58984654
    },
    'beneficiario': {
      'nome': 'João Cardoso',
      'banco': '001',
      'agencia': '34560',
      'conta': 70379544
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 1222.03
  },
  {
    'id': '2c9947b0-a515-49ef-b0db-d6e2c82bae27',
    'pagador': {
      'nome': 'Ana Batista',
      'banco': '033',
      'agencia': '0010',
      'conta': 40372287
    },
    'beneficiario': {
      'nome': 'Pedro Nascimento',
      'banco': '237',
      'agencia': '34560',
      'conta': 20535915
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 12345.62
  },
  {
    'id': '3bf3f6ce-633d-40d4-acf9-1f123911dabd',
    'pagador': {
      'nome': 'Ana Barros',
      'banco': '104',
      'agencia': '34560',
      'conta': 59523357
    },
    'beneficiario': {
      'nome': 'Ana Barros',
      'banco': '001',
      'agencia': '3616',
      'conta': 67861677
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 122.0
  },
  {
    'id': '60c60024-f57d-439b-ba70-3c5451765a5d',
    'pagador': {
      'nome': 'Beatriz Souza',
      'banco': '237',
      'agencia': '0010',
      'conta': 47214242
    },
    'beneficiario': {
      'nome': 'Lucas Barbosa',
      'banco': '001',
      'agencia': '3616',
      'conta': 84542200
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 100.2
  },
  {
    'id': 'b03e4932-372d-47bb-b482-3efcd9e06d81',
    'pagador': {
      'nome': 'Beatriz Nascimento',
      'banco': '237',
      'agencia': '1200',
      'conta': 65724148
    },
    'beneficiario': {
      'nome': 'Ana Nascimento',
      'banco': '237',
      'agencia': '1200',
      'conta': 78955062
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 100.2
  },
  {
    'id': '4b8d93c8-f404-4e96-80a3-5c7571dac1dc',
    'pagador': {
      'nome': 'João Batista',
      'banco': '001',
      'agencia': '34560',
      'conta': 36435504
    },
    'beneficiario': {
      'nome': 'Ana Barros',
      'banco': '033',
      'agencia': '1200',
      'conta': 18168172
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 12345.62
  },
  {
    'id': '47986dba-c5d4-4444-8f63-f8b3747a7101',
    'pagador': {
      'nome': 'Lucas Cardoso',
      'banco': '001',
      'agencia': '3616',
      'conta': 54280203
    },
    'beneficiario': {
      'nome': 'Ana Nascimento',
      'banco': '033',
      'agencia': '34560',
      'conta': 64311671
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 222.12
  },
  {
    'id': '04b8ac2c-797d-4992-9d8f-83d0b37ff05c',
    'pagador': {
      'nome': 'Pedro Nascimento',
      'banco': '001',
      'agencia': '1200',
      'conta': 26391196
    },
    'beneficiario': {
      'nome': 'José Fernandes',
      'banco': '033',
      'agencia': '3616',
      'conta': 67269319
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 222.12
  },
  {
    'id': 'de81d48c-c5e6-4368-83f7-c54f7adfc0f2',
    'pagador': {
      'nome': 'Lucas Barbosa',
      'banco': '033',
      'agencia': '3616',
      'conta': 18688219
    },
    'beneficiario': {
      'nome': 'Ana Nascimento',
      'banco': '001',
      'agencia': '1200',
      'conta': 38559848
    },
    'tipo': 'ted',
    'status': 'OK',
    'valor': 122.0
  }
]

    this.openBeneficiario = function(beneficiario) {
			$("#conteudo-modal").html("<B>BENEFICIáRIO</B><BR/> <BR/> Nome: " + beneficiario.nome+"<br>Banco: "+beneficiario.banco+"<br>Agência: "+beneficiario.agencia+"<br>Conta: "+beneficiario.conta);
  };
  
      this.openPagador= function(pagador) {
			$("#conteudo-modal").html("<B>PAGADOR</B><BR/><BR/>  Nome: " + pagador.nome+"<br>Banco: "+pagador.banco+"<br>Agência: "+pagador.agencia+"<br>Conta: "+pagador.conta);
  
  };
  
}
 
