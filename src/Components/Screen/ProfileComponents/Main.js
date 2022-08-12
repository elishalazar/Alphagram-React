import React from 'react'
import {
    AiOutlineHome,
    AiOutlineLineChart,
    AiOutlineHeart,
    AiOutlineShareAlt
    , AiOutlineSearch
} from 'react-icons/ai';
import { TbCompass } from 'react-icons/tb';
import { TiBell } from 'react-icons/ti';
import { BiEnvelope, BiMessageAlt, BiPalette } from 'react-icons/bi';
import { RiSettingsLine } from 'react-icons/ri';
import { FaRegComment, FaEllipsisH, FaRegEdit } from 'react-icons/fa';
import photo from '../../../assets/pic.avif';
import photos from "../../../assets/pic1.avif"
import photo1 from '../../../assets/profile.avif';
import photo2 from '../../../assets/pic2.avif';
import photo3 from "../../../assets/pic3.avif";
import photo4 from "../../../assets/pic4.avif";
import photo5 from "../../../assets/pic5.avif";
import post from "../../../assets/post.avif";
import post1 from "../../../assets/post1.avif";
import post2 from "../../../assets/post2.avif";
import post3 from "../../../assets/post3.avif";
import post4 from "../../../assets/post4.avif";
import post5 from "../../../assets/post5.avif";
import post6 from "../../../assets/post6.avif";
import pic from "../../../assets/story2.avif";
import pic1 from "../../../assets/story5.avif";
function Main() {
    const menuItems = document.querySelectorAll('.menu-item');

    const changeActiveItem = () => {
        menuItems.forEach(item => {
            item.classList.remove('active')
        })
    }
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');
        })
    })
    return (
        <div>
            <main className='Main'>
                <div className='containerr'>
                    {/* ------------LEFT----------------- */}
                    <div className='left'>
                        <a className='profile'>
                            <div className='profile-photo'>
                                <img src={photo1} alt='/' />
                            </div>
                            <div className='handle'>
                                <h4>Diana Ayi</h4>
                                <p className='text-muted'>
                                    @dayi
                                </p>
                            </div>
                        </a>

                        {/* ----------------SIDEBAR---------- */}
                        <div className='sidebar'>
                            <a className='menu-item active'>
                                <span><AiOutlineHome className='icon' /></span><h3>Home</h3>
                            </a>
                            <a className='menu-item'>
                                <span><TbCompass className='icon' /></span><h3>Explore</h3>
                            </a>
                            <a className='menu-item' id="notifications">
                                <span><TiBell className='icon' /><small className='notification-count'>9+</small></span><h3>Notifications</h3>
                                {/* ---------------------NOTIFICATIONS POPUP----------------- */}
                                <div className='notifications-popup' style={{ display: menuItems ? "block" : "none" }}>
                                    <div>
                                        <div className='profile-photo'>
                                            <img src={photo} alt='/' />
                                        </div>
                                        <div className='notification-body'>
                                            <b>Keke Benjamin</b>accepted your friend request
                                            <small className='text-muted'>2 DAYS AGO</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='profile-photo'>
                                            <img src={photos} alt='/' />
                                        </div>
                                        <div className='notification-body'>
                                            <b>John Doe</b>commented on your post
                                            <small className='text-muted'>1 HOUR AGO</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='profile-photo'>
                                            <img src={photo2} alt='/' />
                                        </div>
                                        <div className='notification-body'>
                                            <b>Marry Oppong</b>and 283 others liked your post
                                            <small className='text-muted'>4 MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='profile-photo'>
                                            <img src={photo3} alt='/' />
                                        </div>
                                        <div className='notification-body'>
                                            <b>Doris Y.Lartey</b>commented on a post you are tagged in
                                            <small className='text-muted'>2 DAYS AGO</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='profile-photo'>
                                            <img src={photo4} alt='/' />
                                        </div>
                                        <div className='notification-body'>
                                            <b>Donaid Trump</b>commented on a post you are tagged in
                                            <small className='text-muted'>1 HOUR AGO</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='profile-photo'>
                                            <img src={photo5} alt='/' />
                                        </div>
                                        <div className='notification-body'>
                                            <b>Jane Doe</b>commented on your post
                                            <small className='text-muted'>1 HOUR AGO</small>
                                        </div>
                                    </div>
                                </div>
                                {/* --------------END NOTIFICATIONS POPUP----------- */}
                            </a>
                            <a className='menu-item' id='messages-notifactions'>
                                <span><BiEnvelope className='icon' /><small className='notification-count'>6</small></span><h3>Message</h3>
                            </a>
                            <a className='menu-item'>
                                <span><BiMessageAlt className='icon' /></span><h3>Bookmarks</h3>
                            </a>
                            <a className='menu-item'>
                                <span><AiOutlineLineChart className='icon' /></span><h3>Analytics</h3>
                            </a>
                            <a className='menu-item'>
                                <span><BiPalette className='icon' /></span><h3>Theme</h3>
                            </a>
                            <a className='menu-item active'>
                                <span><RiSettingsLine className='icon' /></span><h3>Settings</h3>
                            </a>
                        </div>
                        {/* --------------------END OF SIDEBAR----------------- */}
                        <label for='create-post' className='btn btn-primary'>Create Post</label>
                    </div>

                    {/* =====================END OF LEFT=================== */}


                    {/* ----------------MIDDLE----------- */}
                    <div className='middle'>
                        {/* ======================STORIES=============== */}
                        <div className='stories'>
                            <div className='story'>
                                <div className='profile-photo'>
                                    <img src={photo} alt='/' />
                                </div>
                                <p className='name'>Your Story</p>
                            </div>
                            <div className='story'>
                                <div className='profile-photo'>
                                    <img src={photo1} alt='/' />
                                </div>
                                <p className='name'>Lilla James</p>
                            </div>
                            <div className='story'>
                                <div className='profile-photo'>
                                    <img src={photo2} alt='/' />
                                </div>
                                <p className='name'>Winnie Hale</p>
                            </div>
                            <div className='story'>
                                <div className='profile-photo'>
                                    <img src={photo3} alt='/' />
                                </div>
                                <p className='name'>Daniel Bale</p>
                            </div>
                            <div className='story'>
                                <div className='profile-photo'>
                                    <img src={photo4} alt='/' />
                                </div>
                                <p className='name'>Jane Doe</p>
                            </div>
                            <div className='story'>
                                <div className='profile-photo'>
                                    <img src={photo5} alt='/' />
                                </div>
                                <p className='name'>Tina White</p>
                            </div>
                        </div>
                        {/* ================END OF STORIES================ */}
                        <div className='Create-post'>
                            <div className='profile-photo'>
                                <img src={photo1} alt='/' />
                            </div>
                            <input type='text' placeholder="what's on your mind,Diana?" id='create-post' />
                            <input type="submit" value="Post" className='btn btn-primary' />
                        </div>

                        {/* ===================FEEDS=================== */}
                        <div className='feeds'>
                            {/* ===================FEEDS 1=================== */}
                            <div className='feed'>
                                <div className='head'>
                                    <div className='user'>
                                        <div className='profile-photo'>
                                            <img src={photo} alt='/' />
                                        </div>
                                        <div className='ingo'>
                                            <h3>Lana Rose</h3>
                                            <small>Dubai,15MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <span className='edit'>
                                        <FaEllipsisH />
                                    </span>
                                </div>

                                <div className='photo'>
                                    <img src={post} alt='/' />
                                </div>

                                <div className='action-buttons'>
                                    <div className='interactions-buttons'>
                                        <span><AiOutlineHeart /></span>
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineShareAlt /></span>
                                    </div>
                                    <div className='bookmark'>
                                        <span><BiMessageAlt /></span>
                                    </div>
                                </div>

                                <div className='liked-by'>
                                    <span><img src={photo3} alt='/' /></span>
                                    <span><img src={photo2} alt='/' /></span>
                                    <span><img src={photo1} alt='/' /></span>
                                    <p>Liked by <b>Ernest Achiever</b>and <b>2,323 others</b></p>
                                </div>

                                <div className='caption'>
                                    <p><b>Lana Rose</b> Lorem ispum dolor sit quisquam eius.
                                        <span className='harsh-tag'>#lifestyle</span>
                                    </p>
                                </div>

                                <div className=' comments text-muted'>View all 277 comments</div>
                            </div>
                            {/* ===================FEEDS 2=================== */}
                            <div className='feed'>
                                <div className='head'>
                                    <div className='user'>
                                        <div className='profile-photo'>
                                            <img src={photo1} alt='/' />
                                        </div>
                                        <div className='ingo'>
                                            <h3>Jenny</h3>
                                            <small>Dubai,15MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <span className='edit'>
                                        <FaEllipsisH />
                                    </span>
                                </div>

                                <div className='photo'>
                                    <img src={post1} alt='/' />
                                </div>

                                <div className='action-buttons'>
                                    <div className='interactions-buttons'>
                                        <span><AiOutlineHeart /></span>
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineShareAlt /></span>
                                    </div>
                                    <div className='bookmark'>
                                        <span><BiMessageAlt /></span>
                                    </div>
                                </div>

                                <div className='liked-by'>
                                    <span><img src={photo3} alt='/' /></span>
                                    <span><img src={photo2} alt='/' /></span>
                                    <span><img src={photo1} alt='/' /></span>
                                    <p>Liked by <b>Ernest Achiever</b>and <b>2,323 others</b></p>
                                </div>

                                <div className='caption'>
                                    <p><b>Amelia</b> Lorem ispum dolor sit quisquam eius.
                                        <span className='harsh-tag'>#lifestyle</span>
                                    </p>
                                </div>

                                <div className=' comments text-muted'>View all 277 comments</div>
                            </div>

                            {/* ===================FEEDS 3=================== */}
                            <div className='feed'>
                                <div className='head'>
                                    <div className='user'>
                                        <div className='profile-photo'>
                                            <img src={photo2} alt='/' />
                                        </div>
                                        <div className='ingo'>
                                            <h3>Amelia</h3>
                                            <small>Dubai,15MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <span className='edit'>
                                        <FaEllipsisH />
                                    </span>
                                </div>

                                <div className='photo'>
                                    <img src={post2} alt='/' />
                                </div>

                                <div className='action-buttons'>
                                    <div className='interactions-buttons'>
                                        <span><AiOutlineHeart /></span>
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineShareAlt /></span>
                                    </div>
                                    <div className='bookmark'>
                                        <span><BiMessageAlt /></span>
                                    </div>
                                </div>

                                <div className='liked-by'>
                                    <span><img src={photo3} alt='/' /></span>
                                    <span><img src={photo2} alt='/' /></span>
                                    <span><img src={photo1} alt='/' /></span>
                                    <p>Liked by <b>Ernest Achiever</b>and <b>2,323 others</b></p>
                                </div>

                                <div className='caption'>
                                    <p><b>Ashly White</b> Lorem ispum dolor sit quisquam eius.
                                        <span className='harsh-tag'>#lifestyle</span>
                                    </p>
                                </div>

                                <div className=' comments text-muted'>View all 277 comments</div>
                            </div>

                            {/* ===================FEEDS 4=================== */}
                            <div className='feed'>
                                <div className='head'>
                                    <div className='user'>
                                        <div className='profile-photo'>
                                            <img src={photo3} alt='/' />
                                        </div>
                                        <div className='ingo'>
                                            <h3> Rose Marry</h3>
                                            <small>Dubai,15MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <span className='edit'>
                                        <FaEllipsisH />
                                    </span>
                                </div>

                                <div className='photo'>
                                    <img src={post3} alt='/' />
                                </div>

                                <div className='action-buttons'>
                                    <div className='interactions-buttons'>
                                        <span><AiOutlineHeart /></span>
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineShareAlt /></span>
                                    </div>
                                    <div className='bookmark'>
                                        <span><BiMessageAlt /></span>
                                    </div>
                                </div>

                                <div className='liked-by'>
                                    <span><img src={photo3} alt='/' /></span>
                                    <span><img src={photo2} alt='/' /></span>
                                    <span><img src={photo1} alt='/' /></span>
                                    <p>Liked by <b>Ernest Achiever</b>and <b>2,323 others</b></p>
                                </div>

                                <div className='caption'>
                                    <p><b>Lana Rose</b> Lorem ispum dolor sit quisquam eius.
                                        <span className='harsh-tag'>#lifestyle</span>
                                    </p>
                                </div>

                                <div className=' comments text-muted'>View all 277 comments</div>
                            </div>
                            {/* ===================FEEDS 5=================== */}
                            <div className='feed'>
                                <div className='head'>
                                    <div className='user'>
                                        <div className='profile-photo'>
                                            <img src={photo4} alt='/' />
                                        </div>
                                        <div className='ingo'>
                                            <h3>Twinkle</h3>
                                            <small>Dubai,15MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <span className='edit'>
                                        <FaEllipsisH />
                                    </span>
                                </div>

                                <div className='photo'>
                                    <img src={post4} alt='/' />
                                </div>

                                <div className='action-buttons'>
                                    <div className='interactions-buttons'>
                                        <span><AiOutlineHeart /></span>
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineShareAlt /></span>
                                    </div>
                                    <div className='bookmark'>
                                        <span><BiMessageAlt /></span>
                                    </div>
                                </div>

                                <div className='liked-by'>
                                    <span><img src={photo3} alt='/' /></span>
                                    <span><img src={photo2} alt='/' /></span>
                                    <span><img src={photo1} alt='/' /></span>
                                    <p>Liked by <b>Ernest Achiever</b>and <b>2,323 others</b></p>
                                </div>

                                <div className='caption'>
                                    <p><b>Lana Rose</b> Lorem ispum dolor sit quisquam eius.
                                        <span className='harsh-tag'>#lifestyle</span>
                                    </p>
                                </div>

                                <div className=' comments text-muted'>View all 277 comments</div>
                            </div>
                            {/* ===================FEEDS 6=================== */}
                            <div className='feed'>
                                <div className='head'>
                                    <div className='user'>
                                        <div className='profile-photo'>
                                            <img src={photo5} alt='/' />
                                        </div>
                                        <div className='ingo'>
                                            <h3>Dania</h3>
                                            <small>Dubai,15MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <span className='edit'>
                                        <FaEllipsisH />
                                    </span>
                                </div>

                                <div className='photo'>
                                    <img src={post5} alt='/' />
                                </div>

                                <div className='action-buttons'>
                                    <div className='interactions-buttons'>
                                        <span><AiOutlineHeart /></span>
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineShareAlt /></span>
                                    </div>
                                    <div className='bookmark'>
                                        <span><BiMessageAlt /></span>
                                    </div>
                                </div>

                                <div className='liked-by'>
                                    <span><img src={photo3} alt='/' /></span>
                                    <span><img src={photo2} alt='/' /></span>
                                    <span><img src={photo1} alt='/' /></span>
                                    <p>Liked by <b>Ernest Achiever</b>and <b>2,323 others</b></p>
                                </div>

                                <div className='caption'>
                                    <p><b>Lana Rose</b> Lorem ispum dolor sit quisquam eius.
                                        <span className='harsh-tag'>#lifestyle</span>
                                    </p>
                                </div>

                                <div className=' comments text-muted'>View all 277 comments</div>
                            </div>
                            {/* ==========================FEED 7======================== */}
                            <div className='feed'>
                                <div className='head'>
                                    <div className='user'>
                                        <div className='profile-photo'>
                                            <img src={photo} alt='/' />
                                        </div>
                                        <div className='ingo'>
                                            <h3>Lili</h3>
                                            <small>Dubai,15MINUTES AGO</small>
                                        </div>
                                    </div>
                                    <span className='edit'>
                                        <FaEllipsisH />
                                    </span>
                                </div>

                                <div className='photo'>
                                    <img src={post6} alt='/' />
                                </div>

                                <div className='action-buttons'>
                                    <div className='interactions-buttons'>
                                        <span><AiOutlineHeart /></span>
                                        <span><FaRegComment /></span>
                                        <span><AiOutlineShareAlt /></span>
                                    </div>
                                    <div className='bookmark'>
                                        <span><BiMessageAlt /></span>
                                    </div>
                                </div>

                                <div className='liked-by'>
                                    <span><img src={photo3} alt='/' /></span>
                                    <span><img src={photo2} alt='/' /></span>
                                    <span><img src={photo1} alt='/' /></span>
                                    <p>Liked by <b>Ernest Achiever</b>and <b>2,323 others</b></p>
                                </div>

                                <div className='caption'>
                                    <p><b>Lana Rose</b> Lorem ispum dolor sit quisquam eius.
                                        <span className='harsh-tag'>#lifestyle</span>
                                    </p>
                                </div>

                                <div className=' comments text-muted'>View all 277 comments</div>
                            </div>
                            {/* ====================END OF FEED================== */}
                        </div>
                        {/* ====================END OF FEEDS================== */}
                    </div>
                    {/* ----------------------------END OF MIDDLE---------------------------- */}


                    {/* ------------RIGHT--------------- */}
                    <div className='right'>
                        <div className='messages'>
                            <div className='heading'>
                                <h4>Messages</h4>
                                <FaRegEdit className='icon' />
                            </div>
                            {/* ---------------------SEARCH BAR------------------ */}
                            <div className='search-bar'>
                                <AiOutlineSearch className='icon' />
                                <input type="search" placeholder='Search message' id='message-search' />
                            </div>
                            {/* ---------------------MESSAGES CATEGORY------------------ */}
                            <div className='category'>
                                <h6 className='active'>Primary</h6>
                                <h6>General</h6>
                                <h6 className='messages-requests'>Requests(7)</h6>
                            </div>
                            {/* ----------------------------MESSAGE------------------ */}
                            <div className='message'>
                                <div className='profile-photo'>
                                    <img src={pic} alt='/' />
                                </div>
                                <div className='message-body'>
                                    <h5>Edam Quist</h5>
                                    <p className='text-muted'>just wake up bruh</p>
                                </div>
                            </div>
                            {/* -----------MESSAGE------------ */}
                            <div className='message'>
                                <div className='profile-photo'>
                                    <img src={photo} alt='/' />
                                    <div className='active'></div>
                                </div>
                                <div className='message-body'>
                                    <h5>Jane Doe</h5>
                                    <p className='text-bold'>ok</p>
                                </div>
                            </div>
                            {/* -----------MESSAGE------------ */}
                            <div className='message'>
                                <div className='profile-photo'>
                                    <img src={post6} alt='/' />
                                </div>
                                <div className='message-body'>
                                    <h5>Daniella Jackson</h5>
                                    <p className='text-bold'>2 new messages</p>
                                </div>
                            </div>
                            {/* -----------MESSAGE------------ */}
                            <div className='message'>
                                <div className='profile-photo'>
                                    <img src={post5} alt='/' />
                                </div>
                                <div className='message-body'>
                                    <h5>Juliet Makarey</h5>
                                    <p className='text-muted'>lol u right</p>
                                </div>
                            </div>
                            {/* -----------MESSAGE------------ */}
                            <div className='message'>
                                <div className='profile-photo'>
                                    <img src={post} alt='/' />
                                    <div className='active'></div>
                                </div>
                                <div className='message-body'>
                                    <h5>Chantel Msiza</h5>
                                    <p className='text-bold'>Birthday Tomorrow</p>
                                </div>
                            </div>
                        </div>
                        {/* ===================END OF MESSAGE================= */}


                        {/* !!!!!!!---------------FRIED REQUEST------------------!!!!!!!!!! */}
                        <div className='friend-requests'>
                            <h4>Requests</h4>
                            <div className='request'>
                                <div className='info'>
                                    <div className='profile-photo'>
                                        <img src={pic1} alt='/' />
                                    </div>
                                    <div>
                                        <h5>Hajia Bintu</h5>
                                        <p className='text-muted'>
                                            8 mutual friends
                                        </p>
                                    </div>
                                </div>
                                <div className='action'>
                                    <button className='btn btn-primary'>Accept</button>
                                    <button className='btn'>Decline</button>
                                </div>
                            </div>
                            {/* ----------------------------REQUEST---------------- */}
                            <div className='request'>
                                <div className='info'>
                                    <div className='profile-photo'>
                                        <img src={post2} alt='/' />
                                    </div>
                                    <div>
                                        <h5>Jennifer</h5>
                                        <p className='text-muted'>
                                            8 mutual friends
                                        </p>
                                    </div>
                                </div>
                                <div className='action'>
                                    <button className='btn btn-primary'>Accept</button>
                                    <button className='btn'>Decline</button>
                                </div>
                            </div>
                            {/* ---------------------REQUEST---------------------- */}
                            <div className='request'>
                                <div className='info'>
                                    <div className='profile-photo'>
                                        <img src={post4} alt='/' />
                                    </div>
                                    <div>
                                        <h5>lara</h5>
                                        <p className='text-muted'>
                                            8 mutual friends
                                        </p>
                                    </div>
                                </div>
                                <div className='action'>
                                    <button className='btn btn-primary'>Accept</button>
                                    <button className='btn'>Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =======================END OF RIGHT===================     */}
                </div>
            </main>


        </div>
    )
}

export default Main