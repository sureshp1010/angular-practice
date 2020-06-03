angular.module('MyApp', [])
.controller('homeController', ['$scope', '$filter', function ($scope, $filter) {
    
    $scope.MainMenu = [];
    $scope.SubMenu = [];
    $scope.Department = [{ name: 'IT', Id: '1' }, { name: 'Accounts', Id: '2' }, { name: 'DevOps', Id: '3' }]
    $scope.Employee = { Name: '', EmailId: '', DepartmentId: 0 };

    $scope.Employees = [];
    var getEmployee =function()
    {
        return [{ Name: 'Deepak', EmailId: 'd@gmail.com', DepartmentId: 1 },
        { Name: 'Anil', EmailId: 'a@gmail.com', DepartmentId: 2 },
        { Name: 'Suresh', EmailId: 's@gmail.com', DepartmentId: 1 },
        { Name: 'Ravi', EmailId: 'r@gmail.com', DepartmentId: 3 }];
    }
    //Emp name as upper case and email id as lower case
    $scope.myFunc = function () {
        alert($scope.Employee.Name + " " + $scope.Employee.EmailId + " " + $scope.Employee.DepartmentId);
    }

    $scope.filterEmployee = function() {
       // var empList=getEmployee();
        $scope.Employees = $filter('filter') (getEmployee(),{ Name: $scope.SearchTerm });

    }


    var getMainMenuItems = function () {
        return [{ Name: 'Veg', Id: 101 }, { Name: 'Non-Veg', Id: 102 }];
    }

    var getSubMenu = function () {
        return [{ Name: 'Paneer', Id: 11, MenuId: 101 }, { Name: 'Rajma', Id: 12, MenuId: 101 }, { Name: 'Paneer-2', Id: 13, MenuId: 101 },
        { Name: 'Chiken', Id: 21, MenuId: 102 }, { Name: 'xyz', Id: 11, MenuId: 102 }, { Name: 'rty', Id: 11, MenuId: 102 }]
    }

    $scope.loadSubMenu = function () {
        var subMenuItems = getSubMenu();
        $scope.SubMenu = $filter('filter')(subMenuItems, { MenuId: $scope.MenuId });
    }

    

    this.$onInit = () => {
        $scope.Employees= getEmployee();
        $scope.MainMenu = getMainMenuItems();
    }

}]);
