/**
 * Created by Naver on 2016. 6. 13..
 */

import {Injectable}     from '@angular/core';
import {HEROES}         from './mock-heroes';
import {Hero}           from "./hero";

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000)

        );
    }

    getHero(id: number) {
        return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */