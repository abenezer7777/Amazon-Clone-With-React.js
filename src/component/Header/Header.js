import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header__option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Select your address</span>
        </div>
        <div className="header__optionNav">
          <select
            aria-describedby="searchDropdownDescription"
            class="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
            data-nav-digest="/8Jag+805lt8rpD5HBmkk2VwIU4="
            data-nav-selected="0"
            id="searchDropdownBox"
            name="url"
            // style="display: block; top: 2.5px;"
            tabindex="0"
            title="Search in"
          >
            <option selected="selected" value="search-alias=aps">
              All Departments
            </option>
            <option value="search-alias=alexa-skills">Alexa Skills</option>
            <option value="search-alias=amazon-devices">Amazon Devices</option>
            <option value="search-alias=amazon-pharmacy">
              Amazon Pharmacy
            </option>
            <option value="search-alias=warehouse-deals">
              Amazon Warehouse
            </option>
            <option value="search-alias=appliances">Appliances</option>
            <option value="search-alias=mobile-apps">Apps &amp; Games</option>
            <option value="search-alias=arts-crafts">
              Arts, Crafts &amp; Sewing
            </option>
            <option value="search-alias=audible">
              Audible Books &amp; Originals
            </option>
            <option value="search-alias=automotive">
              Automotive Parts &amp; Accessories
            </option>
            <option value="search-alias=baby-products">Baby</option>
            <option value="search-alias=beauty">
              Beauty &amp; Personal Care
            </option>
            <option value="search-alias=stripbooks">Books</option>
            <option value="search-alias=popular">CDs &amp; Vinyl</option>
            <option value="search-alias=mobile">
              Cell Phones &amp; Accessories
            </option>
            <option value="search-alias=fashion">
              Clothing, Shoes &amp; Jewelry
            </option>
            <option value="search-alias=fashion-womens">
              &nbsp;&nbsp;&nbsp;Women
            </option>
            <option value="search-alias=fashion-mens">
              &nbsp;&nbsp;&nbsp;Men
            </option>
            <option value="search-alias=fashion-girls">
              &nbsp;&nbsp;&nbsp;Girls
            </option>
            <option value="search-alias=fashion-boys">
              &nbsp;&nbsp;&nbsp;Boys
            </option>
            <option value="search-alias=fashion-baby">
              &nbsp;&nbsp;&nbsp;Baby
            </option>
            <option value="search-alias=collectibles">
              Collectibles &amp; Fine Art
            </option>
            <option value="search-alias=computers">Computers</option>
            <option value="search-alias=financial">
              Credit and Payment Cards
            </option>
            <option value="search-alias=edu-alt-content">
              Digital Educational Resources
            </option>
            <option value="search-alias=digital-music">Digital Music</option>
            <option value="search-alias=electronics">Electronics</option>
            <option value="search-alias=lawngarden">
              Garden &amp; Outdoor
            </option>
            <option value="search-alias=gift-cards">Gift Cards</option>
            <option value="search-alias=grocery">
              Grocery &amp; Gourmet Food
            </option>
            <option value="search-alias=handmade">Handmade</option>
            <option value="search-alias=hpc">
              Health, Household &amp; Baby Care
            </option>
            <option value="search-alias=local-services">
              Home &amp; Business Services
            </option>
            <option value="search-alias=garden">Home &amp; Kitchen</option>
            <option value="search-alias=industrial">
              Industrial &amp; Scientific
            </option>
            <option value="search-alias=prime-exclusive">Just for Prime</option>
            <option value="search-alias=digital-text">Kindle Store</option>
            <option value="search-alias=fashion-luggage">
              Luggage &amp; Travel Gear
            </option>
            <option value="search-alias=luxury">Luxury Stores</option>
            <option value="search-alias=magazines">
              Magazine Subscriptions
            </option>
            <option value="search-alias=movies-tv">Movies &amp; TV</option>
            <option value="search-alias=mi">Musical Instruments</option>
            <option value="search-alias=office-products">
              Office Products
            </option>
            <option value="search-alias=courses">Online Learning</option>
            <option value="search-alias=pets">Pet Supplies</option>
            <option value="search-alias=luxury-beauty">Premium Beauty</option>
            <option value="search-alias=instant-video">Prime Video</option>
            <option value="search-alias=smart-home">Smart Home</option>
            <option value="search-alias=software">Software</option>
            <option value="search-alias=sporting">Sports &amp; Outdoors</option>
            <option value="search-alias=specialty-aps-sns">
              Subscribe &amp; Save
            </option>
            <option value="search-alias=subscribe-with-amazon">
              Subscription Boxes
            </option>
            <option value="search-alias=tools">
              Tools &amp; Home Improvement
            </option>
            <option value="search-alias=toys-and-games">
              Toys &amp; Games
            </option>
            <option value="search-alias=under-ten-dollars">Under $10</option>
            <option value="search-alias=videogames">Video Games</option>
          </select>
        </div>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__clearlink removeLine">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="removeLine">
            <div className="header__option">
              <span className="header_optionLineOne">Return</span>
              <span className="header_optionLineTwo">& orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" className="header__clearlink removeLine">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon
                fontSize="large"
                className="header__optionBasketIcon"
              />

              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>

              <span className="header_optionLineTwo">Cart</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="banner">
        <div className="banner_nav">
          <div className="">
            <span>All</span>
          </div>
          <div>
            <span className="">Clinc</span>
          </div>
          <div>
            <span className="">Prime</span>
          </div>
          <div>
            <span className="">Prime Video</span>
          </div>
          <div>
            <span className="">Amazon Basics</span>
          </div>
          <div>
            <span className="">Buy Again</span>
          </div>
          <div>
            <span className="">Today's Deal</span>
          </div>
          <div>
            <span className="">Best Sellers</span>
          </div>
          <div>
            <span className="">Customer Service</span>
          </div>
          <div>
            <span className="">New Relese</span>
          </div>
          <div>
            <span className="">Books</span>
          </div>
          <div>
            <span className="mother">Shop Mother's Day</span>
          </div>
        </div>
      </div>
      <div>
        {/* <div id="nav-main" class="nav-sprite">
          <div class="nav-left">
            <script type="text/javascript">
              window.navmet.tmp=+new Date();
            </script>
            <a
              href="javascript: void(0)"
              id="nav-hamburger-menu"
              role="button"
              aria-label="Open Menu"
              data-csa-c-type="widget"
              data-csa-c-slot-id="HamburgerMenuDesktop"
              data-csa-c-interaction-events="click"
              data-csa-c-id="v3iz6z-jswahk-53d1l8-plrjf8"
            >
              <i class="hm-icon nav-sprite"></i>
              <span class="hm-icon-label">All</span>
            </a>

            <script type="text/javascript">
              var hmenu = document.getElementById("nav-hamburger-menu");
              hmenu.setAttribute("href", "javascript: void(0)");
              hmenu.addEventListener("click", window.navHamburgerMetricLogger);
              window.$Nav && $Nav.declare('hamburgerMenuIconAvailableOnLoad',
              false);
            </script>
            <script type="text/javascript">window.navmet.push</script>
          </div>
          <div class="nav-fill">
            <div id="nav-shop"></div>
            <div id="nav-xshop-container">
              <div id="nav-xshop" class="nav-progressive-content">
                <script type="text/javascript">
                  window.navmet.tmp=+new Date();
                </script>
                <a
                  href="/gp/help/customer/accessibility"
                  aria-label="Click to call our Disability Customer Support line, or reach us directly at 1-888-283-1678"
                  class="nav-hidden-aria  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_0"
                  data-csa-c-id="eqiyuv-df5583-cn7cy9-osxgu0"
                >
                  Disability Customer Support
                </a>

                <a
                  href="https://clinic.amazon.com/?ref_=nav_cs_clinic"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_1"
                  data-csa-c-content-id="nav_cs_clinic"
                  data-csa-c-id="you031-hvjavd-m21gbp-qlq8ir"
                >
                  Clinic
                </a>

                <a
                  href="/gp/help/customer/display.html?nodeId=508510&amp;ref_=nav_cs_customerservice"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_2"
                  data-csa-c-content-id="nav_cs_customerservice"
                  data-csa-c-id="bs4rxx-vedywo-69ylpg-24ck73"
                >
                  Customer Service
                </a>

                <a
                  href="/gp/bestsellers/?ref_=nav_cs_bestsellers"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_3"
                  data-csa-c-content-id="nav_cs_bestsellers"
                  data-csa-c-id="9j4sx4-ym15cd-rvnlhm-chuvzf"
                >
                  Best Sellers
                </a>

                <a
                  href="/stores/node/20648519011?channel=discovbar?field-lbr_brands_browse-bin=AmazonBasics&amp;ref_=nav_cs_amazonbasics"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_4"
                  data-csa-c-content-id="nav_cs_amazonbasics"
                  data-csa-c-id="2qvceb-34enc0-k2g67f-wl0z9w"
                >
                  Amazon Basics
                </a>

                <a
                  href="/gp/new-releases/?ref_=nav_cs_newreleases"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_5"
                  data-csa-c-content-id="nav_cs_newreleases"
                  data-csa-c-id="cijuoy-dfwtzl-trzuni-f8r7b"
                >
                  New Releases
                </a>

                <a
                  href="/prime?ref_=nav_cs_primelink_nonmember"
                  class="nav-a  "
                  data-ux-jq-mouseenter="true"
                  id="nav-link-amazonprime"
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav-link-amazonprime"
                  data-csa-c-content-id="nav_cs_primelink_nonmember"
                  data-csa-c-id="2afmbr-22ks9p-g1s1hu-dwkc2h"
                >
                  <span>Prime</span>
                  <span
                    class="nav-icon nav-arrow"
                    // style="visibility: visible;"
                  ></span>
                </a>

                <a
                  href="/deals?ref_=nav_cs_gb"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_7"
                  data-csa-c-content-id="nav_cs_gb"
                  data-csa-c-id="rkncuq-tyjzpo-iehq53-8wthxx"
                >
                  Today's Deals
                </a>

                <a
                  href="/music/unlimited?ref_=nav_cs_music"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_8"
                  data-csa-c-content-id="nav_cs_music"
                  data-csa-c-id="t05grb-h8z0tp-t055kz-qcuvps"
                >
                  Music
                </a>

                <a
                  href="/books-used-books-textbooks/b/?ie=UTF8&amp;node=283155&amp;ref_=nav_cs_books"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_9"
                  data-csa-c-content-id="nav_cs_books"
                  data-csa-c-id="txcl30-1dmtum-nofru-xmi1aa"
                >
                  Books
                </a>

                <a
                  href="/gp/browse.html?node=16115931011&amp;ref_=nav_cs_registry"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_10"
                  data-csa-c-content-id="nav_cs_registry"
                  data-csa-c-id="wsprz8-3o50jf-93lcqf-7vo8kj"
                >
                  Registry
                </a>

                <a
                  href="/amazon-fashion/b/?ie=UTF8&amp;node=7141123011&amp;ref_=nav_cs_fashion"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_11"
                  data-csa-c-content-id="nav_cs_fashion"
                  data-csa-c-id="t91ei3-unqxk5-kfwyif-af2z9g"
                >
                  Fashion
                </a>

                <a
                  href="/home-garden-kitchen-furniture-bedding/b/?ie=UTF8&amp;node=1055398&amp;ref_=nav_cs_home"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_12"
                  data-csa-c-content-id="nav_cs_home"
                  data-csa-c-id="11o4rk-dox6b3-vzlaij-stkfqr"
                >
                  Amazon Home
                </a>

                <a
                  href="/onemedical/b/?ie=UTF8&amp;node=57181331011&amp;ref_=nav_cs_one_medical"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_13"
                  data-csa-c-content-id="nav_cs_one_medical"
                  data-csa-c-id="94zzvu-53f6fr-j2k8a5-cp3da0"
                >
                  One Medical
                </a>

                <a
                  href="/gift-cards/b/?ie=UTF8&amp;node=2238192011&amp;ref_=nav_cs_gc"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_14"
                  data-csa-c-content-id="nav_cs_gc"
                  data-csa-c-id="b3shvm-ps4m6l-5z2a4i-wzioam"
                >
                  Gift Cards
                </a>

                <a
                  href="https://pharmacy.amazon.com/?ref_=nav_cs_pharmacy"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_15"
                  data-csa-c-content-id="nav_cs_pharmacy"
                  data-csa-c-id="joywcq-cphu7x-5utqf9-40nyi7"
                >
                  Pharmacy
                </a>

                <a
                  href="/toys/b/?ie=UTF8&amp;node=165793011&amp;ref_=nav_cs_toys"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_16"
                  data-csa-c-content-id="nav_cs_toys"
                  data-csa-c-id="g26qme-lzxp83-maf2h9-h3urwc"
                >
                  Toys &amp; Games
                </a>

                <a
                  href="/b/?_encoding=UTF8&amp;ld=AZUSSOA-sell&amp;node=12766669011&amp;ref_=nav_cs_sell"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_17"
                  data-csa-c-content-id="nav_cs_sell"
                  data-csa-c-id="nkkebz-v5jar5-6y80p0-e6xx9y"
                >
                  Sell
                </a>

                <a
                  href="/Coupons/b/?_encoding=UTF8&amp;node=2231352011&amp;ref_=nav_cs_coupons"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_18"
                  data-csa-c-content-id="nav_cs_coupons"
                  data-csa-c-id="lqudrs-b77ovg-ws62vz-pr454q"
                >
                  Coupons
                </a>

                <a
                  href="/automotive-auto-truck-replacements-parts/b/?ie=UTF8&amp;node=15684181&amp;ref_=nav_cs_automotive"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_19"
                  data-csa-c-content-id="nav_cs_automotive"
                  data-csa-c-id="cx553e-3742z2-q6g99y-7dq6ar"
                >
                  Automotive
                </a>

                <a
                  href="/gcx/Gifts-for-Everyone/gfhz/?ref_=nav_cs_giftfinder"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_20"
                  data-csa-c-content-id="nav_cs_giftfinder"
                  data-csa-c-id="mo2xg6-h1ux9o-4q0jyc-qqdtw7"
                >
                  Find a Gift
                </a>

                <a
                  href="/computer-pc-hardware-accessories-add-ons/b/?ie=UTF8&amp;node=541966&amp;ref_=nav_cs_pc"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_21"
                  data-csa-c-content-id="nav_cs_pc"
                  data-csa-c-id="r6iuci-1oo35c-x1fvtp-dpkgow"
                >
                  Computers
                </a>

                <a
                  href="/Beauty-Makeup-Skin-Hair-Products/b/?ie=UTF8&amp;node=3760911&amp;ref_=nav_cs_beauty"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_22"
                  data-csa-c-content-id="nav_cs_beauty"
                  data-csa-c-id="2cqbha-15tmdj-fcdu9j-6oq2c8"
                >
                  Beauty &amp; Personal Care
                </a>

                <a
                  href="/computer-video-games-hardware-accessories/b/?ie=UTF8&amp;node=468642&amp;ref_=nav_cs_video_games"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_23"
                  data-csa-c-content-id="nav_cs_video_games"
                  data-csa-c-id="9x65g9-9xvdn3-nme4kq-21vm5h"
                >
                  Video Games
                </a>

                <a
                  href="/Tools-and-Home-Improvement/b/?ie=UTF8&amp;node=228013&amp;ref_=nav_cs_hi"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_24"
                  data-csa-c-content-id="nav_cs_hi"
                  data-csa-c-id="2iseob-c0le16-n2nr4s-kdj7mp"
                >
                  Home Improvement
                </a>

                <a
                  href="/Smart-Home/b/?ie=UTF8&amp;node=6563140011&amp;ref_=nav_cs_smart_home"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_25"
                  data-csa-c-content-id="nav_cs_smart_home"
                  data-csa-c-id="mfzct0-txou04-1fl18e-hlq730"
                >
                  Smart Home
                </a>

                <a
                  href="/health-personal-care-nutrition-fitness/b/?ie=UTF8&amp;node=3760901&amp;ref_=nav_cs_hpc"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_26"
                  data-csa-c-content-id="nav_cs_hpc"
                  data-csa-c-id="6kaaw3-d5os9b-3efpt5-t9nxjq"
                >
                  Health &amp; Household
                </a>

                <a
                  href="/luxurystores?ref_=nav_cs_luxury"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_27"
                  data-csa-c-content-id="nav_cs_luxury"
                  data-csa-c-id="tb3ld2-fxjxxs-ygu33j-hq064q"
                >
                  Luxury Stores
                </a>

                <a
                  href="/pet-shops-dogs-cats-hamsters-kittens/b/?ie=UTF8&amp;node=2619533011&amp;ref_=nav_cs_pets"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_28"
                  data-csa-c-content-id="nav_cs_pets"
                  data-csa-c-id="rz3iyb-3pt45x-faienz-evsb35"
                >
                  Pet Supplies
                </a>

                <a
                  href="/Audible-Books-and-Originals/b/?ie=UTF8&amp;node=18145289011&amp;ref_=nav_cs_audible"
                  class="nav-a  "
                  tabindex="0"
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_29"
                  data-csa-c-content-id="nav_cs_audible"
                  data-csa-c-id="hot7cq-15be3-26qp9u-ci36i3"
                >
                  Audible
                </a>
                <script type="text/javascript">window.navmet.push</script>
              </div>
            </div>
          </div>
          <div class="nav-right">
            <script type="text/javascript">
              window.navmet.tmp=+new Date();
            </script>
            <div id="nav-swmslot" class="nav-swm-text-widget">
              <a
                href="/mothersday/?_encoding=UTF8&amp;ref_=nav_swm_DiscoTec_MDAY23_GW_SWM&amp;pf_rd_p=7db7af96-94e6-4aba-a69b-823d2a95075b&amp;pf_rd_s=nav-sitewide-msg-text&amp;pf_rd_t=4201&amp;pf_rd_i=navbar-4201&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_r=NG5272QPFN032XRCF8XP"
                id="swm-link"
                class="nav_a nav-swm-text nav-progressive-attribute nav-progressive-content"
                tabindex="0"
              >
                Shop Mother's Day
              </a>
            </div>
            <script type="text/javascript">window.navmet.push</script>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
