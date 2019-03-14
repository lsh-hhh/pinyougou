app.controller('brandController', function($scope, $controller, brandService) { //需要注入$controller

	$controller('baseController', {$scope:$scope}); //继承baseController
	
	
	// 查询品牌列表
	$scope.findAll = function() {
		brandService.findAll().success(
			function(response) {
				$scope.list = response;
			}
		);
	}

	$scope.findPage = function(page, size) {
		brandService.findPage(page, size).success(
			function(response) {
				$scope.list = response.rows;
				$scope.paginationConf.totalItems = response.total;
			}
		);
	}

	// 新增和更新
	$scope.save = function() {
		var object = null;
		if ($scope.entity.id != null) {
			boject = brandService.update($scope.entity);
		} else {
			boject = brandService.add($scope.entity);
		}
		object.success(function(response) {
			if (response.success) {
				$scope.reloadList();
			} else {
				alert(response.message);
			}
		});
	}

	// 查找id对应的对象
	$scope.findOne = function(id) {
		brandService.findOne(id).success(function(response) {
			$scope.entity = response;
		});
	}

	// 删除
	$scope.dele = function() {
		brandService.dele($scope.selectIds).success(function(response) {
			if (response.success) {
				$scope.reloadList();
			} else {
				alert(response.message);
			}
		});
	}

	// 查询
	$scope.searchEntity = {};

	$scope.search = function(page, size) {
		brandService.search(page, size, $scope.searchEntity).success(
				function(response) {
					$scope.list = response.rows;
					$scope.paginationConf.totalItems = response.total;
				});
	}

});