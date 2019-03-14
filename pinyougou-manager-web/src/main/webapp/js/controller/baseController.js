app.controller('baseController', function($scope) {

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