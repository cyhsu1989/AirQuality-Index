var app = angular.module('AirApp', []);

app.controller('MainController', function($scope,$http,$sce){
	$scope.type='area';
	//$scope.countyData = {};
	$scope.countyData;


	$scope.taiwanCounty=['基隆市','臺北市','新北市','桃園市','新竹市','新竹縣','宜蘭縣','苗栗縣','臺中市','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','臺南市','高雄市','屏東縣','臺東縣','花蓮縣','宜蘭縣','金門縣','澎湖縣','連江縣'];

    var url = "http://opendata.epa.gov.tw/ws/Data/AQX/?$orderby=SiteName&$skip=0&$top=1000&format=json&callback=JSON_CALLBACK";

    $http.jsonp(url)
        .success(function(data){
            $scope.countyData = data;
        });

	/*$http.get('http://opendata.epa.gov.tw/ws/Data/AQX/?$orderby=SiteName&$skip=0&$top=1000&format=json').success(function(data){
		$scope.countyData = data;
	});*/
});