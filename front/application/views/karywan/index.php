<div class="row">
    <div class="col-lg-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="pb-3">
                    <h5 class="card-title">
                        Data Karyawan <button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary float-right" title="tambah karyawan"><i class="pe-7s-upload"></i> tambah karyawan</button>
                    </h5>
                </div>
                <table class="mb-0 table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NIP</th>
                            <th>NIK</th>
                            <th>Nama</th>
                            <th>Golongan</th>
                            <th>Tanggal Lahir</th>
                            <th>Bergabung</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <button class="mb-0 mr-0 btn btn-sm btn-info" title="ubah"><i class="pe-7s-eyedropper"></i></button>
                                <button class="mb-0 mr-0 btn btn-sm btn-danger" title="nonaktifkan"><i class="pe-7s-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <button class="mb-0 mr-0 btn btn-sm btn-info"><i class="pe-7s-eyedropper"></i></button>
                                <button class="mb-0 mr-0 btn btn-sm btn-danger"><i class="pe-7s-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdooo</td>
                            <td>
                                <button class="mb-0 mr-0 btn btn-sm btn-info"><i class="pe-7s-eyedropper"></i></button>
                                <button class="mb-0 mr-0 btn btn-sm btn-danger"><i class="pe-7s-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


<script>
    const showModal = () => {
        $('#myModal').addClass('show')
    }
</script>