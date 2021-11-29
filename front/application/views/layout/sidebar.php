<div class="app-sidebar sidebar-shadow">
    <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ml-auto">
            <div>
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="app-header__mobile-menu">
        <div>
            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
    <div class="app-header__menu">
        <span>
            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                <span class="btn-icon-wrapper">
                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                </span>
            </button>
        </span>
    </div>

    <div class="scrollbar-sidebar">
        <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
                <li class="app-sidebar__heading">Dashboards</li>
                <li>
                    <a href="<?= base_url() ?>" class="mm-active">
                        <i class="metismenu-icon pe-7s-rocket"></i>
                        Home
                    </a>
                </li>
                <li class="app-sidebar__heading">Master</li>
                <li>
                    <a href="<?= base_url() ?>karyawan">
                        <i class="metismenu-icon pe-7s-users"></i>
                        Karyawan
                    </a>
                </li>
                <li>
                    <a href="<?= base_url() ?>golongan">
                        <i class="metismenu-icon pe-7s-flag"></i>
                        Golongan
                    </a>
                </li>

                <li class="app-sidebar__heading">Kehadiran</li>
                <li>
                    <a href="<?= base_url() ?>lembur">
                        <i class="metismenu-icon pe-7s-angle-left-circle"></i>
                        Lembur
                    </a>
                </li>
                <li>
                    <a href="<?= base_url() ?>cuti">
                        <i class="metismenu-icon pe-7s-scissors"></i>
                        Cuti
                    </a>
                </li>

                <li class="app-sidebar__heading">Transaksi</li>
                <li>
                    <a href="<?= base_url() ?>penggajian">
                        <i class="metismenu-icon pe-7s-credit"></i>
                        Penggajian
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>