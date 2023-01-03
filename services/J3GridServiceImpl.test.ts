// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { J3GridServiceImpl } from "./J3GridServiceImpl";

describe('J3GridServiceImpl', () => {

    describe('constructor', () => {

        it('can be constructed', () => {
            expect( () => new J3GridServiceImpl() ).not.toThrow();
        })

    });

});
