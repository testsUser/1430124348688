'use strict';
var app = angular.module('app', []);

app.controller('AppCtrl', function ($http) {
    var ctrl = this;
    ctrl.favouriteSong = {artist: 'Ed Sheeran', title: 'I see fire'};

    // add get query
    $http.get("http://localhost:3000/songs")
        .success(function(songsList) {
            ctrl.songs = songsList;
        });
    // add get query

    ctrl.addFavouriteSong = function (favouriteSong) {
        // complete function
        $http.post("http://localhost:3000/favourite_songs", favouriteSong)
            .success(function(favouriteSongsList) {
                ctrl.favouriteSongs = favouriteSongsList;
            })

    };

    ctrl.removeFavouriteSongs = function () {
        //complete function
        $http.post("http://localhost:3000/favourite_songs")
            .success(function() {
                ctrl.favouriteSongs = [];
            })

    };
});