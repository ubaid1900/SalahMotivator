import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as XLSX from 'xlsx';
import { ExporterService } from './exporter.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {
  // data: unknown[][];

  constructor(private exporterService: ExporterService) { }

  ngOnInit(): void {
  }
  print() {
    this.exporterService.print();

    // pdfMake.createPdf(null).open();
    // /* generate worksheet */
  	// const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

  	// /* generate workbook and add the worksheet */
  	// const wb: XLSX.WorkBook = XLSX.utils.book_new();
  	// XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  	// /* save to file */
  	// XLSX.writeFile(wb, 'this.fileName');
  }
}
