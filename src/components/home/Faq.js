import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;

function AppFaq() {
    useEffect(() => {
        Aos.init({ duration:2000 });
     }, [])
    return(
        <div id="faq" className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                <h2 data-aos="fade-up">Frequently Asked Questions</h2>
                <p data-aos="fade-up">All the biggest questions from Avengers: Endgame, answered</p>
                </div>
                <Collapse  defaultActiveKey={['1']} >
                    <Panel header="HOW DOES TIME-TRAVEL WORK IN THE MCU?" key="1">
                    <p>Time-travel is apparently just a thing now in this franchise, and the characters don’t make a big enough deal about it. This isn’t the first time we’ve seen time-travel in Marvel’s movies. Doctor Strange did it first, although in a vastly different way with seemingly different rules. Using the Time Stone, Strange and, later, Thanos, were able to rewind time entirely, then allow events to play out in a different way. <br/>
                    But with the use of the Quantum Realm, the Avengers are time-traveling differently. (And, as the movie goes to great pains to explain, it’s in a manner that distinctly isn’t like Back to the Future.) Quantum Realm time-travel can’t retroactively change the present where the time-traveler originated, so going back and killing someone’s grandfather (or baby Thanos, as was suggested during the movie) won’t undo the present —
                     or at least not the present where the time-traveler originated. If someone changes the past by, say, losing the Space Stone to Loki who escapes with it, which would prevent the events of the next several MCU movies from playing out as we saw them happen, the process just creates an alternate timeline that plays out on its own.<br/> That also means items and people from the past can travel toward the present without changing 
                     anything. That allows the Infinity Stones, Nebula and Thanos from the past, and Thanos’ army to come toward the present, and even die there, without blinking the existing timeline out of existence.<br/>
                    The apparent exception to that rule is the Infinity Stones themselves because, somehow, reality is rooted in their existence. So they have to remain in their original reality to allow time to move forward and prevent the universe from being consumed. That is why Captain America has to return the borrowed stones to their own timeline and narrative stream when the Avengers are finished using them.</p>
                    </Panel>
                    <Panel header="SO IS LOKI ALIVE AGAIN?" key="2">
                    <p>Apparently? That’s particularly unclear, given the nature of the MCU’s time-travel. It really depends on what the deal is with Captain America in the ending. It’s possible Cap went back in time, lived out his life in an alternate timeline, then warped back as an old man, bringing along an undestroyed shield, to the main reality. Either that, or he traveled back and lived out his life in secret as the younger self we already saw in the MCU has his adventures. (That doesn’t quite seem to be how time-travel works here, and it would raise a lot of practical questions, even once you hand-wave away everything else about time-travel.)<br/>
                    Problem is, the creative team can’t entirely agree on how things work. The Russo brothers, who directed the movie, hold to the first theory, which does seem to make a little more sense, given the way the quantum time-travel has been shown to work so far. But screenwriters Christopher Markus and Stephen McFeely disagree, noting in an interview with Fandango that they thought Cap lived out his life alongside his younger self.<br/>
                    If it’s the first theory, then Loki is alive, but he’s off in an alternate timeline, which would be a perfect setup for the MCU’s planned Loki TV spinoff. If it’s set in an alternate timeline, he can do anything there without the movies having to take his adventures into account. If it’s the second theory, then the main MCU might very well have another alive Loki running around who hasn’t experienced any of the character growth from the second and third Thor movies, which saw his character redeemed and reconciled with Thor.<br/>
                    The Russo brothers did address the issue more directly in a later interview, commenting that “Loki, when he teleports away with the Time Stone, would create his own timeline,” seemingly implying that because Loki escaped using an Infinity Stone, (which, as noted above, doesn’t follow the same rules as the rest of the MCU’s time-travel), his situation would be a little different than the rest of the time travel. Perhaps it’s best to just take Joe Russo at his word when he says that “it gets very complicated.”</p>
                    </Panel>
                    <Panel header="WHY DOES CAPTAIN AMERICA TAKE MJOLNIR BACK IN TIME AT THE END?" key="3">
                    <p>Presumably, it’s to return Mjolnir to its original place in the timeline, since present-Thor presumably stole it from past-Thor when he summoned it in past-Asgard. Although it’s unclear whether he would have needed to, given how MCU time-travel has been shown to work. Mjolnir isn’t a load-bearing Infinity Stone. Alternatively, he took it with him because it’s cool as hell. Why wouldn’t he want to possess the power of Thor?<br/></p>
                    </Panel>
                    <Panel header="SO COULD CAP ALWAYS PICK UP MJOLNIR?" key="4">
                    <p>Unclear. As we saw in Age of Ultron, he was at least able to budge it back then. Was Cap able to lift Mjolnir back then but pretended he couldn’t to save Thor some embarrassment? He’s certainly noble enough for that. Or did he somehow become more worthy in Endgame, perhaps by being willing to risk losing himself in the past forever in order to save the world from the Snap? According to the Russo brothers, their view was that Cap could always lift the hammer, but that in Age of Ultron he may have not picked up the hammer in order to not embarrass Thor, but given that movie was written by an entirely different director (Joss Whedon), there’s room to debate.<br/>
                    Either way, it’s awesome, so I’ll leave the exact mechanics as an exercise to the reader.</p>
                    </Panel>
                    <Panel header="WHY IS CAPTAIN AMERICA OLD AT THE END? ISN’T HE IMMORTAL?" key="5">
                    <p>Captain America isn’t immortal. Presumably, he does age normally, despite the Super Soldier serum, which keeps him in peak physical condition. The reason Cap doesn’t age between the events of Captain America: The First Avenger and The Avengers is because he was buried in the ice, which served as a sort of cryogenic preservation. With Cap living his life out normally with Peggy in the (possibly alternate) past, he ages normally — albeit as someone in peak physical condition for his age, per the serum’s effects.</p>
                    </Panel>
                    <Panel header="WHO’S THE RANDOM TEENAGER STANDING IN THE BACK AT IRON MAN’S FUNERAL?" key="6">
                    <p>That is actor Ty Simpkins, who played Harley Keener, the kid who helps Tony out in Iron Man 3. They grow up so fast, don’t they?</p>
                    </Panel>
                    <Panel header="WHAT’S NEXT FOR THE MCU?" key="7">
                    <p>The most immediate movie is Spider-Man: Far From Home, which will pick up with Peter Parker and the rest of the gang resuming their lives now that they’ve been un-dusted. As the latest trailer shows (in a way that spoils Endgame, but if you’ve made it this far, you’re probably okay with that), Peter seems reluctant to suit up after the death of his mentor, Tony Stark.<br/>
                    We also know that there are Black Panther, Doctor Strange, and Guardians of the Galaxy sequels in the works, and they’re pretty open-ended about where their plots can go, given that the MCU has more or less wiped the slate clean for the future. Doctor Strange has yet to pick up on its post-credits scene with Baron Mordo looking to slim down the number of sorcerers in the world, and the Guardians teased an adventure to reunite with Gamora (possibly with Thor at their side) at the end of Endgame. A Black Widow movie is supposedly still in the works as well.<br/>
                    Similarly, it’s hard to imagine that Marvel wouldn’t have a Captain Marvel sequel waiting in the wings. That film also has a pretty open lane ahead of it post-Endgame, assuming it isn’t another prequel, focusing on the character’s adventures between her first solo outing and her Endgame appearance.<br/>
                    There’s also the already-announced Falcon and the Winter Soldier show for Disney+ — a prospect that just got a whole lot more interesting with Sam Wilson taking on the mantle of Captain America. There’s also the planned Hawkeye series and the WandaVision show, which purportedly will involve Vision and Scarlet Witch.</p>
                    </Panel>
                    <Panel header="HOW WILL THE BLACK WIDOW MOVIE OR WANDAVISION WORK SINCE BLACK WIDOW AND VISION ARE DEAD?" key="8">
                    <p>Probably as prequels. Natasha’s story could dive into her “red ledger” spy life before she joined The Avengers, for example. (What did happen in Budapest?) And the WandaVision series for Disney+ could showcase the character’s largely offscreen relationship that sprung up between Civil War and Infinity War.<br/>
                    Or, you know, time-travel.</p>
                    </Panel>
                </Collapse>
                <div className="quickSupport">
                    <h3 data-aos="slide-up">Want More Answers?</h3>
                    <p data-aos="slide-up">If you want to ask more questions related to Avengers so you can mail me..</p>
                    <div className="btnHolder">
                    <Button data-aos="flip-down" className="exp" size="large"><i className="fas fa-envelope"></i>Email Your Questions?</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFaq;