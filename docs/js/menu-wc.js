'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">AppQVS documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/Actividadhbt1PageModule.html" data-type="entity-link">Actividadhbt1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Actividadhbt1PageModule-27baf4b4d98ed3f3e24d1d87ae46f899"' : 'data-target="#xs-components-links-module-Actividadhbt1PageModule-27baf4b4d98ed3f3e24d1d87ae46f899"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Actividadhbt1PageModule-27baf4b4d98ed3f3e24d1d87ae46f899"' :
                                            'id="xs-components-links-module-Actividadhbt1PageModule-27baf4b4d98ed3f3e24d1d87ae46f899"' }>
                                            <li class="link">
                                                <a href="components/Actividadhbt1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Actividadhbt1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AguaPageModule.html" data-type="entity-link">AguaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AguaPageModule-eb75b68913b65cc345c6e35deb195016"' : 'data-target="#xs-components-links-module-AguaPageModule-eb75b68913b65cc345c6e35deb195016"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AguaPageModule-eb75b68913b65cc345c6e35deb195016"' :
                                            'id="xs-components-links-module-AguaPageModule-eb75b68913b65cc345c6e35deb195016"' }>
                                            <li class="link">
                                                <a href="components/AguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AguaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' : 'data-target="#xs-components-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' :
                                            'id="xs-components-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Actividadhbt1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Actividadhbt1Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AguaPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BienvenidaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BienvenidaPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompromisoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompromisoPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Compromisohbt1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Compromisohbt1Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvaluacionImcPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EvaluacionImcPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvaluacionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EvaluacionPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito1Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito2Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito3Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito4Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito4Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito5Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito5Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito6Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito6Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito7Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito7Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Habito8Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito8Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstruccionesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstruccionesPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntrotestaguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntrotestaguaPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuHabitosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuHabitosPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuPrincipalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuPrincipalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalImcPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalImcPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalReflexionar1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalReflexionar1Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalTips1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalTips1Page</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyApp.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyApp</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerimetroAbdominalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerimetroAbdominalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistroPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultadoImcPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultadoImcPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultadoSaludPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultadoSaludPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RsaludPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RsaludPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RtestaguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RtestaguaPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaludPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaludPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaludoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaludoPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlidePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SlidePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestActitudpositivaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestActitudpositivaPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestActividadfisicaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestActividadfisicaPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestAguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestAguaPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestAutocontrolPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestAutocontrolPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestBiencomerPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestBiencomerPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestDesayunarmasPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestDesayunarmasPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestDescansoadecuadoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestDescansoadecuadoPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestSerfelizPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestSerfelizPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' : 'data-target="#xs-injectables-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' :
                                        'id="xs-injectables-links-module-AppModule-571c2ddeed4c00cdbb05b6094c35acb5"' }>
                                        <li class="link">
                                            <a href="injectables/RestProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RestProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BienvenidaPageModule.html" data-type="entity-link">BienvenidaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BienvenidaPageModule-c6785bfa9f18973c06ea50189ab5e7d0"' : 'data-target="#xs-components-links-module-BienvenidaPageModule-c6785bfa9f18973c06ea50189ab5e7d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BienvenidaPageModule-c6785bfa9f18973c06ea50189ab5e7d0"' :
                                            'id="xs-components-links-module-BienvenidaPageModule-c6785bfa9f18973c06ea50189ab5e7d0"' }>
                                            <li class="link">
                                                <a href="components/BienvenidaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BienvenidaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Compromisohbt1PageModule.html" data-type="entity-link">Compromisohbt1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Compromisohbt1PageModule-370303b1dbeb5eeda4af7ca32ccd8fd0"' : 'data-target="#xs-components-links-module-Compromisohbt1PageModule-370303b1dbeb5eeda4af7ca32ccd8fd0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Compromisohbt1PageModule-370303b1dbeb5eeda4af7ca32ccd8fd0"' :
                                            'id="xs-components-links-module-Compromisohbt1PageModule-370303b1dbeb5eeda4af7ca32ccd8fd0"' }>
                                            <li class="link">
                                                <a href="components/Compromisohbt1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Compromisohbt1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompromisoPageModule.html" data-type="entity-link">CompromisoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CompromisoPageModule-398ed5f1a670280218f2abd26ac8ac27"' : 'data-target="#xs-components-links-module-CompromisoPageModule-398ed5f1a670280218f2abd26ac8ac27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompromisoPageModule-398ed5f1a670280218f2abd26ac8ac27"' :
                                            'id="xs-components-links-module-CompromisoPageModule-398ed5f1a670280218f2abd26ac8ac27"' }>
                                            <li class="link">
                                                <a href="components/CompromisoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompromisoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EvaluacionImcPageModule.html" data-type="entity-link">EvaluacionImcPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EvaluacionImcPageModule-a0d849733eca2b3f24069df30a1dfe97"' : 'data-target="#xs-components-links-module-EvaluacionImcPageModule-a0d849733eca2b3f24069df30a1dfe97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EvaluacionImcPageModule-a0d849733eca2b3f24069df30a1dfe97"' :
                                            'id="xs-components-links-module-EvaluacionImcPageModule-a0d849733eca2b3f24069df30a1dfe97"' }>
                                            <li class="link">
                                                <a href="components/EvaluacionImcPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EvaluacionImcPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EvaluacionPageModule.html" data-type="entity-link">EvaluacionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EvaluacionPageModule-e0138e3bebf0bc3861c38f5befdb2055"' : 'data-target="#xs-components-links-module-EvaluacionPageModule-e0138e3bebf0bc3861c38f5befdb2055"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EvaluacionPageModule-e0138e3bebf0bc3861c38f5befdb2055"' :
                                            'id="xs-components-links-module-EvaluacionPageModule-e0138e3bebf0bc3861c38f5befdb2055"' }>
                                            <li class="link">
                                                <a href="components/EvaluacionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EvaluacionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito1PageModule.html" data-type="entity-link">Habito1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito1PageModule-797760e87cda8d7203455593ee127503"' : 'data-target="#xs-components-links-module-Habito1PageModule-797760e87cda8d7203455593ee127503"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito1PageModule-797760e87cda8d7203455593ee127503"' :
                                            'id="xs-components-links-module-Habito1PageModule-797760e87cda8d7203455593ee127503"' }>
                                            <li class="link">
                                                <a href="components/Habito1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito2PageModule.html" data-type="entity-link">Habito2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito2PageModule-609c59e901a4ecf51025ee495e333966"' : 'data-target="#xs-components-links-module-Habito2PageModule-609c59e901a4ecf51025ee495e333966"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito2PageModule-609c59e901a4ecf51025ee495e333966"' :
                                            'id="xs-components-links-module-Habito2PageModule-609c59e901a4ecf51025ee495e333966"' }>
                                            <li class="link">
                                                <a href="components/Habito2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito3PageModule.html" data-type="entity-link">Habito3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito3PageModule-d3b9f2b8014d3c4eaead7d1ca7ad6bca"' : 'data-target="#xs-components-links-module-Habito3PageModule-d3b9f2b8014d3c4eaead7d1ca7ad6bca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito3PageModule-d3b9f2b8014d3c4eaead7d1ca7ad6bca"' :
                                            'id="xs-components-links-module-Habito3PageModule-d3b9f2b8014d3c4eaead7d1ca7ad6bca"' }>
                                            <li class="link">
                                                <a href="components/Habito3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito4PageModule.html" data-type="entity-link">Habito4PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito4PageModule-0e792d766429f265a3159603cc194d96"' : 'data-target="#xs-components-links-module-Habito4PageModule-0e792d766429f265a3159603cc194d96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito4PageModule-0e792d766429f265a3159603cc194d96"' :
                                            'id="xs-components-links-module-Habito4PageModule-0e792d766429f265a3159603cc194d96"' }>
                                            <li class="link">
                                                <a href="components/Habito4Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito4Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito5PageModule.html" data-type="entity-link">Habito5PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito5PageModule-7fbde120809958a1ec303d839541f53a"' : 'data-target="#xs-components-links-module-Habito5PageModule-7fbde120809958a1ec303d839541f53a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito5PageModule-7fbde120809958a1ec303d839541f53a"' :
                                            'id="xs-components-links-module-Habito5PageModule-7fbde120809958a1ec303d839541f53a"' }>
                                            <li class="link">
                                                <a href="components/Habito5Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito5Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito6PageModule.html" data-type="entity-link">Habito6PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito6PageModule-b50f4ca8e7b0eac71a30730bf82b959d"' : 'data-target="#xs-components-links-module-Habito6PageModule-b50f4ca8e7b0eac71a30730bf82b959d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito6PageModule-b50f4ca8e7b0eac71a30730bf82b959d"' :
                                            'id="xs-components-links-module-Habito6PageModule-b50f4ca8e7b0eac71a30730bf82b959d"' }>
                                            <li class="link">
                                                <a href="components/Habito6Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito6Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito7PageModule.html" data-type="entity-link">Habito7PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito7PageModule-c9d4515aa95d056ce9a5cad95625fcb9"' : 'data-target="#xs-components-links-module-Habito7PageModule-c9d4515aa95d056ce9a5cad95625fcb9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito7PageModule-c9d4515aa95d056ce9a5cad95625fcb9"' :
                                            'id="xs-components-links-module-Habito7PageModule-c9d4515aa95d056ce9a5cad95625fcb9"' }>
                                            <li class="link">
                                                <a href="components/Habito7Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito7Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Habito8PageModule.html" data-type="entity-link">Habito8PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Habito8PageModule-9a45384c73c809e2b152c9af1fe088e4"' : 'data-target="#xs-components-links-module-Habito8PageModule-9a45384c73c809e2b152c9af1fe088e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Habito8PageModule-9a45384c73c809e2b152c9af1fe088e4"' :
                                            'id="xs-components-links-module-Habito8PageModule-9a45384c73c809e2b152c9af1fe088e4"' }>
                                            <li class="link">
                                                <a href="components/Habito8Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Habito8Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstruccionesPageModule.html" data-type="entity-link">InstruccionesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InstruccionesPageModule-adeefb36be19bdcf89c8867c310b9413"' : 'data-target="#xs-components-links-module-InstruccionesPageModule-adeefb36be19bdcf89c8867c310b9413"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstruccionesPageModule-adeefb36be19bdcf89c8867c310b9413"' :
                                            'id="xs-components-links-module-InstruccionesPageModule-adeefb36be19bdcf89c8867c310b9413"' }>
                                            <li class="link">
                                                <a href="components/InstruccionesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstruccionesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntrotestaguaPageModule.html" data-type="entity-link">IntrotestaguaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntrotestaguaPageModule-5e71d43518c54ccf7e87b1305b1021b3"' : 'data-target="#xs-components-links-module-IntrotestaguaPageModule-5e71d43518c54ccf7e87b1305b1021b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntrotestaguaPageModule-5e71d43518c54ccf7e87b1305b1021b3"' :
                                            'id="xs-components-links-module-IntrotestaguaPageModule-5e71d43518c54ccf7e87b1305b1021b3"' }>
                                            <li class="link">
                                                <a href="components/IntrotestaguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntrotestaguaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' : 'data-target="#xs-components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' :
                                            'id="xs-components-links-module-LoginPageModule-b548317e8f80d55bfccc2702689d65a3"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuHabitosPageModule.html" data-type="entity-link">MenuHabitosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuHabitosPageModule-a019baa8fa679eae578eaab6f957c337"' : 'data-target="#xs-components-links-module-MenuHabitosPageModule-a019baa8fa679eae578eaab6f957c337"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuHabitosPageModule-a019baa8fa679eae578eaab6f957c337"' :
                                            'id="xs-components-links-module-MenuHabitosPageModule-a019baa8fa679eae578eaab6f957c337"' }>
                                            <li class="link">
                                                <a href="components/MenuHabitosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuHabitosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuPrincipalPageModule.html" data-type="entity-link">MenuPrincipalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuPrincipalPageModule-e961972c3afb6fc0aa95384066c98450"' : 'data-target="#xs-components-links-module-MenuPrincipalPageModule-e961972c3afb6fc0aa95384066c98450"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuPrincipalPageModule-e961972c3afb6fc0aa95384066c98450"' :
                                            'id="xs-components-links-module-MenuPrincipalPageModule-e961972c3afb6fc0aa95384066c98450"' }>
                                            <li class="link">
                                                <a href="components/MenuPrincipalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuPrincipalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalImcPageModule.html" data-type="entity-link">ModalImcPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalImcPageModule-0c21e6d6376ec3f7dae7c454cc3a7d21"' : 'data-target="#xs-components-links-module-ModalImcPageModule-0c21e6d6376ec3f7dae7c454cc3a7d21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalImcPageModule-0c21e6d6376ec3f7dae7c454cc3a7d21"' :
                                            'id="xs-components-links-module-ModalImcPageModule-0c21e6d6376ec3f7dae7c454cc3a7d21"' }>
                                            <li class="link">
                                                <a href="components/ModalImcPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalImcPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalReflexionar1PageModule.html" data-type="entity-link">ModalReflexionar1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalReflexionar1PageModule-f2753a49018d0ab719e4fe77e557bf9f"' : 'data-target="#xs-components-links-module-ModalReflexionar1PageModule-f2753a49018d0ab719e4fe77e557bf9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalReflexionar1PageModule-f2753a49018d0ab719e4fe77e557bf9f"' :
                                            'id="xs-components-links-module-ModalReflexionar1PageModule-f2753a49018d0ab719e4fe77e557bf9f"' }>
                                            <li class="link">
                                                <a href="components/ModalReflexionar1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalReflexionar1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalTips1PageModule.html" data-type="entity-link">ModalTips1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalTips1PageModule-5481ef94c4a0aceb56bc5a59016c2f6f"' : 'data-target="#xs-components-links-module-ModalTips1PageModule-5481ef94c4a0aceb56bc5a59016c2f6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalTips1PageModule-5481ef94c4a0aceb56bc5a59016c2f6f"' :
                                            'id="xs-components-links-module-ModalTips1PageModule-5481ef94c4a0aceb56bc5a59016c2f6f"' }>
                                            <li class="link">
                                                <a href="components/ModalTips1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalTips1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerimetroAbdominalPageModule.html" data-type="entity-link">PerimetroAbdominalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PerimetroAbdominalPageModule-cec1362087081b150f5e6fa469c7af0d"' : 'data-target="#xs-components-links-module-PerimetroAbdominalPageModule-cec1362087081b150f5e6fa469c7af0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PerimetroAbdominalPageModule-cec1362087081b150f5e6fa469c7af0d"' :
                                            'id="xs-components-links-module-PerimetroAbdominalPageModule-cec1362087081b150f5e6fa469c7af0d"' }>
                                            <li class="link">
                                                <a href="components/PerimetroAbdominalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerimetroAbdominalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistroPageModule.html" data-type="entity-link">RegistroPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistroPageModule-46d8daf5c19a88d0156a7846c6615648"' : 'data-target="#xs-components-links-module-RegistroPageModule-46d8daf5c19a88d0156a7846c6615648"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistroPageModule-46d8daf5c19a88d0156a7846c6615648"' :
                                            'id="xs-components-links-module-RegistroPageModule-46d8daf5c19a88d0156a7846c6615648"' }>
                                            <li class="link">
                                                <a href="components/RegistroPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistroPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultadoImcPageModule.html" data-type="entity-link">ResultadoImcPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultadoImcPageModule-bc2f4bdec5a15ff789fc495dde6b5172"' : 'data-target="#xs-components-links-module-ResultadoImcPageModule-bc2f4bdec5a15ff789fc495dde6b5172"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultadoImcPageModule-bc2f4bdec5a15ff789fc495dde6b5172"' :
                                            'id="xs-components-links-module-ResultadoImcPageModule-bc2f4bdec5a15ff789fc495dde6b5172"' }>
                                            <li class="link">
                                                <a href="components/ResultadoImcPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultadoImcPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultadoSaludPageModule.html" data-type="entity-link">ResultadoSaludPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultadoSaludPageModule-6a46933cd776d9981c2187093cc470d0"' : 'data-target="#xs-components-links-module-ResultadoSaludPageModule-6a46933cd776d9981c2187093cc470d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultadoSaludPageModule-6a46933cd776d9981c2187093cc470d0"' :
                                            'id="xs-components-links-module-ResultadoSaludPageModule-6a46933cd776d9981c2187093cc470d0"' }>
                                            <li class="link">
                                                <a href="components/ResultadoSaludPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultadoSaludPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsaludPageModule.html" data-type="entity-link">RsaludPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsaludPageModule-52450e59d68b715264722677bd61294f"' : 'data-target="#xs-components-links-module-RsaludPageModule-52450e59d68b715264722677bd61294f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsaludPageModule-52450e59d68b715264722677bd61294f"' :
                                            'id="xs-components-links-module-RsaludPageModule-52450e59d68b715264722677bd61294f"' }>
                                            <li class="link">
                                                <a href="components/RsaludPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RsaludPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RtestaguaPageModule.html" data-type="entity-link">RtestaguaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RtestaguaPageModule-3822d4732f6dea5b1be13ea12d0cbdc5"' : 'data-target="#xs-components-links-module-RtestaguaPageModule-3822d4732f6dea5b1be13ea12d0cbdc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RtestaguaPageModule-3822d4732f6dea5b1be13ea12d0cbdc5"' :
                                            'id="xs-components-links-module-RtestaguaPageModule-3822d4732f6dea5b1be13ea12d0cbdc5"' }>
                                            <li class="link">
                                                <a href="components/RtestaguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RtestaguaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaludoPageModule.html" data-type="entity-link">SaludoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaludoPageModule-98d358496d7132e621aba1cb9c354188"' : 'data-target="#xs-components-links-module-SaludoPageModule-98d358496d7132e621aba1cb9c354188"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaludoPageModule-98d358496d7132e621aba1cb9c354188"' :
                                            'id="xs-components-links-module-SaludoPageModule-98d358496d7132e621aba1cb9c354188"' }>
                                            <li class="link">
                                                <a href="components/SaludoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaludoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaludPageModule.html" data-type="entity-link">SaludPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaludPageModule-c6cd7207af61e678a164d06b01ff275b"' : 'data-target="#xs-components-links-module-SaludPageModule-c6cd7207af61e678a164d06b01ff275b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaludPageModule-c6cd7207af61e678a164d06b01ff275b"' :
                                            'id="xs-components-links-module-SaludPageModule-c6cd7207af61e678a164d06b01ff275b"' }>
                                            <li class="link">
                                                <a href="components/SaludPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaludPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SlidePageModule.html" data-type="entity-link">SlidePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SlidePageModule-dd76c05fd20209bcf463bfa5abed29da"' : 'data-target="#xs-components-links-module-SlidePageModule-dd76c05fd20209bcf463bfa5abed29da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SlidePageModule-dd76c05fd20209bcf463bfa5abed29da"' :
                                            'id="xs-components-links-module-SlidePageModule-dd76c05fd20209bcf463bfa5abed29da"' }>
                                            <li class="link">
                                                <a href="components/SlidePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SlidePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestActitudpositivaPageModule.html" data-type="entity-link">TestActitudpositivaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestActitudpositivaPageModule-95d2cc2bd87f919fdd1bdaa01da67ceb"' : 'data-target="#xs-components-links-module-TestActitudpositivaPageModule-95d2cc2bd87f919fdd1bdaa01da67ceb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestActitudpositivaPageModule-95d2cc2bd87f919fdd1bdaa01da67ceb"' :
                                            'id="xs-components-links-module-TestActitudpositivaPageModule-95d2cc2bd87f919fdd1bdaa01da67ceb"' }>
                                            <li class="link">
                                                <a href="components/TestActitudpositivaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestActitudpositivaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestActividadfisicaPageModule.html" data-type="entity-link">TestActividadfisicaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestActividadfisicaPageModule-1807b36270e99bee8ffe96927658da9a"' : 'data-target="#xs-components-links-module-TestActividadfisicaPageModule-1807b36270e99bee8ffe96927658da9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestActividadfisicaPageModule-1807b36270e99bee8ffe96927658da9a"' :
                                            'id="xs-components-links-module-TestActividadfisicaPageModule-1807b36270e99bee8ffe96927658da9a"' }>
                                            <li class="link">
                                                <a href="components/TestActividadfisicaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestActividadfisicaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestAguaPageModule.html" data-type="entity-link">TestAguaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestAguaPageModule-ecf759b7b67ed16bbfdd78fb943aafa2"' : 'data-target="#xs-components-links-module-TestAguaPageModule-ecf759b7b67ed16bbfdd78fb943aafa2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestAguaPageModule-ecf759b7b67ed16bbfdd78fb943aafa2"' :
                                            'id="xs-components-links-module-TestAguaPageModule-ecf759b7b67ed16bbfdd78fb943aafa2"' }>
                                            <li class="link">
                                                <a href="components/TestAguaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestAguaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestAutocontrolPageModule.html" data-type="entity-link">TestAutocontrolPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestAutocontrolPageModule-9c6acc0e1ed0c150f3dbfdabaa504aec"' : 'data-target="#xs-components-links-module-TestAutocontrolPageModule-9c6acc0e1ed0c150f3dbfdabaa504aec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestAutocontrolPageModule-9c6acc0e1ed0c150f3dbfdabaa504aec"' :
                                            'id="xs-components-links-module-TestAutocontrolPageModule-9c6acc0e1ed0c150f3dbfdabaa504aec"' }>
                                            <li class="link">
                                                <a href="components/TestAutocontrolPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestAutocontrolPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestBiencomerPageModule.html" data-type="entity-link">TestBiencomerPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestBiencomerPageModule-f838e5372a8c4aac32af63e13b8984e2"' : 'data-target="#xs-components-links-module-TestBiencomerPageModule-f838e5372a8c4aac32af63e13b8984e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestBiencomerPageModule-f838e5372a8c4aac32af63e13b8984e2"' :
                                            'id="xs-components-links-module-TestBiencomerPageModule-f838e5372a8c4aac32af63e13b8984e2"' }>
                                            <li class="link">
                                                <a href="components/TestBiencomerPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestBiencomerPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestDesayunarmasPageModule.html" data-type="entity-link">TestDesayunarmasPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestDesayunarmasPageModule-d1d85faca4affae20f921008a9883fef"' : 'data-target="#xs-components-links-module-TestDesayunarmasPageModule-d1d85faca4affae20f921008a9883fef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestDesayunarmasPageModule-d1d85faca4affae20f921008a9883fef"' :
                                            'id="xs-components-links-module-TestDesayunarmasPageModule-d1d85faca4affae20f921008a9883fef"' }>
                                            <li class="link">
                                                <a href="components/TestDesayunarmasPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestDesayunarmasPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestDescansoadecuadoPageModule.html" data-type="entity-link">TestDescansoadecuadoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestDescansoadecuadoPageModule-4d01774e3a6d1319a3d543c707d1e72c"' : 'data-target="#xs-components-links-module-TestDescansoadecuadoPageModule-4d01774e3a6d1319a3d543c707d1e72c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestDescansoadecuadoPageModule-4d01774e3a6d1319a3d543c707d1e72c"' :
                                            'id="xs-components-links-module-TestDescansoadecuadoPageModule-4d01774e3a6d1319a3d543c707d1e72c"' }>
                                            <li class="link">
                                                <a href="components/TestDescansoadecuadoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestDescansoadecuadoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestPageModule.html" data-type="entity-link">TestPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestPageModule-36ce6f0d622f131d5a6a52d0ddc7c3a7"' : 'data-target="#xs-components-links-module-TestPageModule-36ce6f0d622f131d5a6a52d0ddc7c3a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestPageModule-36ce6f0d622f131d5a6a52d0ddc7c3a7"' :
                                            'id="xs-components-links-module-TestPageModule-36ce6f0d622f131d5a6a52d0ddc7c3a7"' }>
                                            <li class="link">
                                                <a href="components/TestPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestSerfelizPageModule.html" data-type="entity-link">TestSerfelizPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestSerfelizPageModule-70c74e5bfdd2e96c8631bd1f37d94d31"' : 'data-target="#xs-components-links-module-TestSerfelizPageModule-70c74e5bfdd2e96c8631bd1f37d94d31"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestSerfelizPageModule-70c74e5bfdd2e96c8631bd1f37d94d31"' :
                                            'id="xs-components-links-module-TestSerfelizPageModule-70c74e5bfdd2e96c8631bd1f37d94d31"' }>
                                            <li class="link">
                                                <a href="components/TestSerfelizPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestSerfelizPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});