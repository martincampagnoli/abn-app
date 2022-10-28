<template>
  <div class="container py-5">

  <div class="row text-center text-white mb-5">
    <div class="col-lg-7 mx-auto">
      <h1 class="display-4">ABN AMRO Assessment</h1>
      <p class="lead mb-0">Display a list of popular TV shows</p>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-8 mx-auto">

      <ul class="list-group shadow">

        <li class="list-group-item">
          <div class="media align-items-lg-center flex-column flex-lg-row p-3">
            <div class="media-body order-2 order-lg-1">
              <h5 class="mt-0 font-weight-bold mb-2">Awesome show</h5>
              <p class="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
              <div class="d-flex align-items-center justify-content-between mt-1">
                <h6 class="font-weight-bold my-2">English</h6>
                <ul class="list-inline small">
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                  <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                </ul>
              </div>
            </div><img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Generic placeholder image" width="100" class="ml-lg-5 order-1 order-lg-2">
          </div>
        </li>

      </ul>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'DisplayList',
}
</script>
