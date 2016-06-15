/**
 * Created by Naver on 2016. 6. 13..
 */

import {Injectable}     from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return HEROES;
    }
}
