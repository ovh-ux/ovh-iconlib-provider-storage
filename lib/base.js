/**
 * Copyright (c) 2013-2018, OVH SAS.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *   * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *   * Neither the name of OVH SAS nor the
 *     names of its contributors may be used to endorse or promote products
 *     derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY OVH SAS AND CONTRIBUTORS ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL OVH SAS AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

const util = require('util');
const errors = require('@rduk/errors');
const base = require('@rduk/provider/lib/base');

/**
 * Storage provider base class
 * Abstraction of files saving and getting
 */

/**
 * @constructor
 */
let StorageBaseProvider = function StorageBaseProvider(config) {
    StorageBaseProvider.super_.call(this, config);

    this.initialize();
};

util.inherits(StorageBaseProvider, base);

StorageBaseProvider.prototype.initialize = function() {};

/**
 * Lists files in the specified path
 * @abstract
 * @param {String} path Path to list
 * @param {Number} skip Number of elements to skip
 * @param {Number} take Number of elements to take
 * @return {Promise}
 */
StorageBaseProvider.prototype.list = function(path, skip, take) {
    errors.throwNotImplementedError('list');
};

/**
 * Upload file
 * @abstract
 * @param {Stream} stream 
 * @param {Object} options 
 * @return {Promise}
 */
StorageBaseProvider.prototype.upload = function(stream, options) {
    errors.throwNotImplementedError('upload');
};

/**
 * Download file
 * @abstract
 * @param {String} filepath 
 * @return {Promise}
 */
StorageBaseProvider.prototype.download = function(filepath) {
    errors.throwNotImplementedError('download');
};

/**
 * Delete file
 * @abstract
 * @param {String} filepath 
 * @return {Promise}
 */
StorageBaseProvider.prototype.remove = function(filepath) {
    errors.throwNotImplementedError('remove');
};

module.exports = StorageBaseProvider;
