/**
 * Copyright (c) 2013-2017, OVH SAS.
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

const errors = require('rduk-errors');
const BaseProvider = require('../lib/base');

describe('provider', function() {

    describe('base', function() {

        let provider;

        beforeEach(function() {
            provider = new BaseProvider({
                name: 'test'
            });
        })

        describe('instantiated without valid config', function() {
            it('should throw an ArgumentError', function() {
                expect(function() {
                    new BaseProvider();
                }).toThrowError(errors.ArgumentError);

                expect(function() {
                    new BaseProvider({});
                }).toThrowError(errors.ArgumentError);
            });
        });

        describe('method list, when called,', function() {
            it('should throw a NotImplementedError', function() {
                expect(function() {
                    provider.list();
                }).toThrowError(errors.NotImplementedError);
            });
        });


        describe('method upload, when called,', function() {
            it('should throw a NotImplementedError', function() {
                expect(function() {
                    provider.upload();
                }).toThrowError(errors.NotImplementedError);
            });
        });

        describe('method download, when called,', function() {
            it('should throw a NotImplementedError', function() {
                expect(function() {
                    provider.download();
                }).toThrowError(errors.NotImplementedError);
            });
        });

        describe('method remove, when called,', function() {
            it('should throw a NotImplementedError', function() {
                expect(function() {
                    provider.remove();
                }).toThrowError(errors.NotImplementedError);
            });
        });

    });

});
