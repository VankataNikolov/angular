import {
    trigger,
    animate,
    transition,
    style,
    state,
    query,
    stagger,
    keyframes
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    state('void', style({
        opacity: 0,
    })),
    transition('void => *', animate(1000)),
]);

export const cardEnter = trigger('cardEnter', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('250ms', [
            animate('600ms ease-in', keyframes([
                style({ opacity: 0, transform: 'translateX(-40px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);

export const listAnimation = trigger('listAnimation', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(20px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);