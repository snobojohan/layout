import React, { Component } from 'react';

class App extends Component {

  state = { theClass: "top" };

  componentDidMount(){
    
    var theClass = 'top';

    // Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

    var last_known_scroll_position = 0;
    var ticking = false;

    var _self = this;

    function doSomething(scroll_pos) {



      if(window.scrollY > 100){
           theClass = 'scrolled';
      } else {
        theClass = 'top';
      }


          console.log(theClass);

       _self.setState({
          activeClass: theClass
       })
  }

    window.addEventListener('scroll', function(e) {

      last_known_scroll_position = window.scrollY;

      if (!ticking) {

        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
         
        ticking = true;

      }
      
    });

    /*
      
      window.addEventListener('scroll', (event) => {
        

         if(window.scrollY > 100){
             theClass = 'normal';
         } 

         this.setState({
            activeClass: theClass
         })

      });
      */
  }
  render() {
    return (
      <div className="app">

        <header className={"app-header " + this.state.activeClass}>
          
          <div className={"card-menu " + this.state.activeClass}>Menu</div>
          <div className="card-logo">LOGO</div>
          <div className="card-cart">Cart</div>

          <div className={"card-search " + this.state.activeClass}>SEARCH</div>

        </header>
        <section className="app-body">
          <p className="intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <p>
            Lörem ipsüm dölör sit ämet, cönsectetür ädipiscing elit. Mörbi feügiät vestibülüm sem, äc süscipit sem lüctüs qüis. Qüisqüe vel ligülä säpien. Pellentesqüe häbitänt mörbi tristiqüe senectüs et netüs et mälesüädä fämes äc türpis egestäs. Dönec fermentüm dignissim mägnä, eü pösüere qüäm phäreträ nec. Ut erös tellüs, üllämcörper vülpütäte tempör ät, tincidünt qüis mi. Phäsellüs cönsectetür äliqüäm löbörtis. Dönec üt pösüere düi. Aliqüäm erät völütpät. Phäsellüs äüctör cürsüs ärcü, vitäe väriüs mäüris dignissim id. Mäüris üt pürüs enim. Vivämüs viverrä, pürüs tempüs bibendüm löbörtis, erät mässä ädipiscing pürüs, vitäe imperdiet nisi felis hendrerit liberö.
          </p>

          <p>
            Mörbi läciniä nisl sed säpien läciniä tincidünt. In id ligülä felis. Aeneän pülvinär, felis nec äüctör pörtä, pürüs felis äliqüet läcüs, et cürsüs läcüs mi eget leö. Cüräbitür eüismöd pülvinär metüs qüis cömmödö. Ut semper äliqüet cönvällis. Nüllä vel mägnä id nisl mälesüädä tempör qüis sed liberö. Nülläm pläcerät düi üt diäm äliqüäm äc scelerisqüe nüllä söllicitüdin. Vestibülüm tristiqüe, änte in ädipiscing mälesüädä, nibh metüs äliqüet läcüs, äc mälesüädä äügüe lörem sit ämet est. Cüräbitür qüäm neqüe, egestäs eü väriüs vel, bländit eü elit. Sed grävidä erös äügüe. Integer cöndimentüm pellentesqüe möllis.
          </p>

          <p>
            Süspendisse vel törtör ä est pellentesqüe mölestie. Präesent sed nüllä jüstö, in läciniä nibh. Pellentesqüe qüis diäm mäüris, id lüctüs nünc. Präesent eleifend velit ä ödiö eleifend üt äliqüäm mi üllämcörper. Nünc eü mäüris säpien. In qüis äügüe mässä, in läöreet mäüris. Vivämüs ligülä risüs, interdüm eü semper id, iäcülis sed säpien. Ut pellentesqüe erät äc ipsüm fermentüm eü imperdiet nisi tincidünt. Nünc cömmödö cöngüe metüs bländit cönsectetür. Integer leö läcüs, ültricies et cönsectetür ät, fäücibüs sit ämet törtör. Integer vel ipsüm eü nisi mölestie tempüs. Präesent sit ämet qüäm ligülä. Aeneän äügüe mäüris, fäcilisis sed cöngüe ä, cömmödö eget dölör. Nüllä bibendüm düi ät diäm ültricies lüctüs. In nec sem pellentesqüe velit interdüm semper.
          </p>

        </section>
      </div>
    );
  }
}

export default App;
