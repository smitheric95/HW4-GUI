import { NgModule, ModuleWithProviders } from '@angular/core';

import { MovieRepositoryService } from './movies/movie-repository.service';

@NgModule({
	id: 'domain',
	providers: [
		MovieRepositoryService
	]
})

export class DomainModule { }