app.controller('brandController', function($scope, $controller, brandService) { //需要注入$controller

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
	
	// 分页控件
	$scope.paginationConf = {
		currentPage : 1,
		totalItems : 10,
		itemsPerPage : 10,
		perPageOption : [ 10, 20, 30, 40, 50 ],
		onChange : function() {
			$scope.reloadList();
		}
	}

	$scope.reloadList = function() {
		$scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
	}

	// 用户勾选复选框
	$scope.selectIds = [];
	$scope.updateSelection = function($event, id) {
		if ($event.target.checked) {
			$scope.selectIds.push(id);
		} else {
			var index = $scope.selectIds.indexOf(id); // 查出id在数组中的位置
			$scope.selectIds.splice(index, 1); // 参数1：index移除位置， 参数二：1 移除个数 
		}
	}


});