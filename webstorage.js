/**
 * webStorage - a wrapper for localStorage api
 *
 */


/**
 * webStorage - a wrapper for localStorage api
 */
var webStorage = (function () {

	'use strict';

	var webStorage = { };

	/**
	 * Add or update the specified key/value pair in the localStorage
	 */
	webStorage.set = function (key, value) {
		if (localStorage) {
			try { 
				localStorage.setItem(key, JSON.stringify(value)); 
			} catch (e) {
				return false;
			}
			return true;
		}

		return false;
	};

    /**
	 * Get the specified key from the localStorage
	 */
	webStorage.get = function (key) {
		if (localStorage) {
			try {
				var value = localStorage.getItem(key);
				return value && JSON.parse(value);
			} catch (e) {
				return null;
			}
		}

		return null;
	};

    /**
	 * Remove the given key in the localStorage
	 */
    webStorage.remove = function (key) {
		if (localStorage) {
			return localStorage.removeItem(key);
		}

		return false;
	}

    /**
	 * Remove all keys in the localStorage
	 */
    webStorage.clear = function () {
		if (localStorage) {
			return localStorage.clear();
		}

		return false;
	}

	/**
	 * Check if the given key exists in the localStorage
	 */
	webStorage.has = function (key) {
		return null !== webStorage.get(key);
	};

	/**
	 * Return the key of the given index in the localStorage
	 */
	webStorage.key = function (index) {
		if (localStorage) {
			return localStorage.key(index);
		}

		return null;
	};

    /**
	 * Return the number of items stored in the localStorage
	 */
	webStorage.length = function () {
		if (localStorage) {
			return localStorage.length;
		}

		return 0;
	}

	return webStorage;
})();
